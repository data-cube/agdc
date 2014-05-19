"""
DatasetRecord: database interface class.

These classes provide an interface between the database and the top-level
ingest algorithm (AbstractIngester and its subclasses). They also provide
the implementation of the database and tile store side of the ingest
process. They are expected to be independent of the structure of any
particular dataset, but will change if the database schema or tile store
format changes.
"""

import logging
from osgeo import osr
from abstract_ingester import DatasetError
from math import floor
# Set up logger.
LOGGER = logging.getLogger(__name__)
LOGGER.setLevel(logging.INFO)

class DatasetRecord(object):
    """DatasetRecord database interface class."""
    # pylint: disable=missing-docstring
    def __init__(self, collection, acquisition_record, dataset_id):
        self.collection = collection
        self.acquisition_record = acquisition_record
        self.dataset_id = dataset_id
        self.mdd = None

    def mark_as_tiled(self):
        pass

    def list_tile_types_and_bands(self):
        """Return the set of tile type ids pertaining to the dataset record
        and also a dictionary of band source information. This dictionary is
        extracted from the datacube.bands object, on the condition that the
        satellite, sensor and processing level matches those of the dataset.
        For derived products such as PQA and Fractional Cover, the (satellite,
        sensor) pair is taken as ('DERIVED', processing_level), as per the
        secondary keys of the datacube.bands dictionary. The returned
        dictionary omits this secondary key and so is keyed as
        dataset_bands[tile_type][file_number]"""
        tile_type_set = set()
        dataset_bands = {} #will contain bands from datacube.bands
        satellite, sensor, level = \
            self.get_satellite_sensor_level()
        datacube_tile_types = self.collection.datacube.bands.keys()
        for tile_type in datacube_tile_types:
            #define datacube_bands as those nested dictionaries pertaining to
            #this tile_type and the dataset's (satellite, sensor) pair
            datacube_bands = \
                self.collection.datacube.bands[tile_type][(satellite, sensor)]
            for file_number in datacube_bands:
                if datacube_bands[file_number]['level_name'] != level:
                    #This band's level_name is not relevant to this dataset
                    continue
                #add this tile_type to the dataset's tile_type_set
                tile_type_set = tile_type_set.union(set([tile_type]))
                #add the band source information to the dataset_bands dict
                if tile_type not in dataset_bands:
                    dataset_bands[tile_type] = {}
                if file_number not in  dataset_bands[tile_type]:
                    dataset_bands[tile_type][file_number] = {}
                dataset_inner_dict = dataset_bands[tile_type][file_number]
                datacube_inner_dict = datacube_bands[tile_type][file_number]
                dataset_inner_dict.update(datacube_inner_dict)
        return tile_type_set, dataset_bands

    def list_bands(self, tile_type_id):
        pass

    # pylint: enable=missing-docstring
    def get_coverage(self, tile_type_id):
        """Given the coordinate reference system of the dataset and that of the
        tile_type_id, return a list of tiles within the dataset footprint"""
        tile_type_info = self.collection.datacube.tile_type_dict[tile_type_id]
        #Get geospatial information from the dataset.
        dataset_crs = self.mdd['projection']
        dataset_geotransform = self.mdd['geotransform']
        pixels = self.mdd['x_pixels']
        lines = self.mdd['y_pixels']
        #Look up the datacube's projection information for this tile_type
        tile_crs = tile_type_info['crs']
        #Get the transformation between the two projections
        transformation = self.define_transformation(dataset_crs, tile_crs)
        #Determine the bounding quadrilateral of the dataset extent
        #in tile coordinates
        dataset_bbox = self.get_bbox(transformation, dataset_geotransform,
                                     pixels, lines)
        #Determine maximum inner rectangle, which is guaranteed to need  tiling
        #and the minimum outer rectangle outside which no tiles will exist.
        cube_origin = (tile_type_info['x_origin'], tile_type_info['y_origin'])
        cube_tile_size = (tile_type_info['x_size'], tile_type_info['y_size'])
        coverage = self.get_touched_tiles(dataset_bbox,
                                          cube_origin, cube_tile_size)
        return coverage

    def define_transformation(self, dataset_crs, tile_crs):
        """Return the transformation between dataset_crs
        and tile_crs projections"""
        osr.UseExceptions()
        try:
            dataset_spatial_reference = self.create_spatial_ref(dataset_crs)
            tile_spatial_reference = self.create_spatial_ref(tile_crs)
            if dataset_spatial_reference == None:
                raise DatasetError('Unknown projecton %s' \
                                       % str(dataset_crs))
            if tile_spatial_reference == None:
                raise DatasetError('Unknown projecton %s' \
                                       % str(tile_crs))
            return osr.CoordinateTransformation(dataset_spatial_reference,
                                                tile_spatial_reference)
        except Exception:
            raise DatasetError('Coordinate transoformation error ' \
                                   'for transforming %s to %s' \
                                   %(str(dataset_crs), str(tile_crs)))

    @staticmethod
    def create_spatial_ref(crs):
        """Create a spatial reference system for projecton crs.
        Called by define_transformation()"""
        # pylint: disable=broad-except
        import re
        osr.UseExceptions()
        try:
            spatial_ref = osr.SpatialReference()
        except Exception:
            raise DatasetError('No spatial reference done for %s' %str(crs))
        try:
            spatial_ref.ImportFromWkt(crs)
            return spatial_ref
        except Exception:
            pass
        try:
            matchobj = re.match(r'EPSG:(\d+)', crs)
            epsg_code = int(matchobj.group(1))
            spatial_ref.ImportFromEPSG(epsg_code)
            return spatial_ref
        except Exception:
            return None

    @staticmethod
    def get_bbox(transform, geotrans, pixels, lines):
        """Return the coordinates of the dataset footprint in clockwise order
        from upper-left"""
        xul, yul, dummy_z =  \
            transform.TransformPoint(geotrans[0], geotrans[3], 0)
        xur, yur, dummy_z = \
            transform.TransformPoint(geotrans[0] + geotrans[1] * pixels,
                                     geotrans[3] + geotrans[4] * pixels, 0)
        xll, yll, dummy_z = \
            transform.TransformPoint(geotrans[0] + geotrans[2] * lines,
                                     geotrans[3] + geotrans[5] * lines, 0)
        xlr, ylr, dummy_z = \
            transform.TransformPoint(
            geotrans[0] + geotrans[1] * pixels + geotrans[2] * lines,
            geotrans[3] + geotrans[4] * pixels + geotrans[5] * lines, 0)
        return [(xul, yul), (xur, yur), (xlr, ylr), (xll, yll)]

    def get_touched_tiles(self, dataset_bbox, cube_origin, cube_tile_size):
        """Return a list of tuples (itile, jtile) comprising all tiles
        footprints that intersect the dataset bounding box"""
        definite_tiles, possible_tiles = \
            self.get_definite_and_possible_tiles(dataset_bbox,
                                                 cube_origin, cube_tile_size)
        coverage_set = definite_tiles
        #Check possible tiles:
        #Check if the tile perimeter intersects the dataset bbox perimeter:
        intersected_tiles = \
            self.get_intersected_tiles(possible_tiles, dataset_bbox,
                                       cube_origin, cube_tile_size)
        coverage_set = coverage_set.union(intersected_tiles)
        possible_tiles = possible_tiles.difference(intersected_tiles)
        #Otherwise the tile might be wholly contained in the dataset bbox
        contained_tiles = \
            self.get_contained_tiles(possible_tiles, dataset_bbox,
                                              cube_origin, cube_tile_size)
        coverage_set = coverage_set.union(contained_tiles)
        return coverage_set

    @staticmethod
    def get_definite_and_possible_tiles(bbox, cube_origin, cube_tile_size):
        """Return two lists of tile footprints: from the largest rectangle
        wholly contained within the dataset bbox and the smallest rectangle
        containing the bbox."""
        #pylint: disable=too-many-locals
        #unpack the bbox vertices in clockwise order from upper-left
        xyul, xyur, xylr, xyll = bbox
        xul, yul = xyul
        xur, yur = xyur
        xlr, ylr = xylr
        xll, yll = xyll
        #unpack the origin of the tiled datacube (e.g. lat=0, lon=0) and the
        #datacube tile size
        xorigin, yorigin = cube_origin
        xsize, ysize = cube_tile_size
        #Define the largest rectangle wholly contained within footprint
        xmin = max(xll, xul)
        xmax = min(xlr, xur)
        ymin = max(yll, ylr)
        ymax = min(yul, yur)
        xmin_index = int(floor((xmin - xorigin) / xsize))
        xmax_index = int(floor((xmax - xorigin) / xsize))
        ymin_index = int(floor((ymin - yorigin) / ysize))
        ymax_index = int(floor((ymax - yorigin) / ysize))
        definite_tiles = set([(itile, jtile)
                          for itile in range(xmin_index, xmax_index + 1)
                          for jtile in range(ymin_index, ymax_index + 1)])
        #Define the smallest rectangle which is guaranteed to include all tiles
        #in the foorprint.
        xmin = min(xll, xul)
        xmax = max(xlr, xur)
        ymin = min(yll, ylr)
        ymax = max(yul, yur)
        xmin_index = int(floor((xmin - xorigin) / xsize))
        xmax_index = int(floor((xmax - xorigin) / xsize))
        ymin_index = int(floor((ymin - yorigin) / ysize))
        ymax_index = int(floor((ymax - yorigin) / ysize))
        possible_tiles = set([(itile, jtile)
                          for itile in range(xmin_index, xmax_index + 1)
                          for jtile in range(ymin_index, ymax_index + 1)]) \
                          .difference(definite_tiles)
        return (definite_tiles, possible_tiles)


    def get_intersected_tiles(self, candidate_tiles, dset_bbox,
                              cube_origin, cube_tile_size):
        """Return the subset of candidate_tiles that have an intersection with
        the dataset bounding box"""
        #pylint: disable=too-many-locals
        xorigin, yorigin = cube_origin
        xsize, ysize = cube_tile_size
        keep_list = []
        for itile, jtile in candidate_tiles:
            intersection_exists = False
            (x0, y0) = (xorigin + itile * xsize,
                        yorigin + (jtile + 1) * ysize)
            tile_bbox = [(x0, y0), (x0 + xsize, y0),
                         (x0 + xsize, y0 - ysize), (x0, y0 - ysize)]
            tile_vtx_number = len(tile_bbox)
            dset_vtx_number = len(dset_bbox)
            for tile_vtx in range(tile_vtx_number):
                x1, y1 = tile_bbox[tile_vtx]
                x2, y2 = tile_bbox[(tile_vtx + 1) % tile_vtx_number]
                for dset_vtx in range(dset_vtx_number):
                    x3, y3 = dset_bbox[dset_vtx]
                    x4, y4 = dset_bbox[(dset_vtx + 1) % dset_vtx_number]
                    xcoords = [x1, x2, x3, x4]
                    ycoords = [y1, y2, y3, y4]
                    intersection_exists = \
                        self.check_intersection(xcoords, ycoords)
                    if intersection_exists:
                        keep_list.append((itile, jtile))
                        break
                if intersection_exists:
                    break
        return set(keep_list)

    @staticmethod
    def get_contained_tiles(candidate_tiles, dset_bbox,
                            cube_origin, cube_tile_size):
        """Return the subset of candidate tiles that lie wholly within the
        dataset bounding box"""
        #pylint: disable=too-many-locals
        xorigin, yorigin = cube_origin
        xsize, ysize = cube_tile_size
        keep_list = []
        for itile, jtile in candidate_tiles:
            tile_vtx_inside = []
            (x0, y0) = (xorigin + itile * xsize,
                        yorigin + (jtile + 1) * ysize)
            tile_bbox = [(x0, y0), (x0 + xsize, y0),
                         (x0 + xsize, y0 - ysize), (x0, y0 - ysize)]
            dset_vtx_number = len(dset_bbox)
            for x, y in tile_bbox:
                #Check if this vertex lies within the dataset bounding box:
                winding_number = 0
                for dset_vtx in range(dset_vtx_number):
                    x1, y1 = dset_bbox[dset_vtx]
                    x2, y2 = dset_bbox[(dset_vtx + 1) % dset_vtx_number]
                    if y >= y1 and y < y2:
                        if (x - x1) * (y2 - y1) > (x2 - x1) * (y - y1):
                            winding_number += 1
                    elif y <= y1 and y > y2:
                        if (x - x1) * (y2 - y1) < (x2 - x1) * (y - y1):
                            winding_number += 1
                tile_vtx_inside.append(winding_number % 2 == 1)
            if tile_vtx_inside.count(True) == len(tile_bbox):
                keep_list.append((itile, jtile))
            assert tile_vtx_inside.count(True) == 4 or \
                   tile_vtx_inside.count(True) == 0, \
                   "Tile partially inside dataset bounding box but has" \
                       "no intersection"
        return set(keep_list)

    @staticmethod
    def check_intersection(xpts, ypts):
        """Determines if the line segments
        (xpts[0], xpts[0]) to (xpts[1], xpts[1]) and
        (xpts[2], xpts[2]) to (xpts[3], xpts[3]) intersect"""
        pvec = (xpts[0], ypts[0])
        qvec = (xpts[2], ypts[2])
        rvec = (xpts[1] - xpts[0], ypts[1] - ypts[0])
        svec = (xpts[3] - xpts[2], ypts[3] - ypts[2])
        rvec_cross_svec = rvec[0] * svec[1] - rvec[1] * svec[0]
        if rvec_cross_svec == 0:
            return False
        qminusp_cross_svec = \
            (qvec[0] - pvec[0]) * svec[1] - (qvec[1] - pvec[1]) * svec[0]
        qminusp_cross_rvec = \
            (qvec[0] - pvec[0]) * rvec[1] - (qvec[1] - pvec[1]) * rvec[0]
        tparameter = qminusp_cross_svec / rvec_cross_svec
        uparameter = qminusp_cross_rvec / rvec_cross_svec
        if tparameter > 0 and tparameter < 1 and \
                uparameter > 0 and uparameter < 1:
            return True

    def get_satellite_sensor_level(self):
        """Use the dataset_record's metadata dictionary to return a tuple of
        (satellite, sensor, processing_level), The purpose of this is to look
        up the datacube.bands nested dictionaries. For bands of derived
        products such as PQA and Fractional Cover, the (satellite, sensor) key
        takes the value ('DERIVED', processing_level)"""
        satellite = self.mdd['satellite_tag'].upper()
        sensor = self.mdd['sensor_name'].upper()
        processing_level = self.mdd['processing_level'].upper()
        if processing_level in ['PQA', 'FC', 'DSM']:
            satellite = 'DERIVED'
            sensor = processing_level
        return (satellite, sensor, processing_level)


