Search.setIndex({envversion:46,filenames:["api/datacube","api/datacube.api","api/datacube.api.model","api/datacube.api.query","api/datacube.api.utils","api/datacube.api.workflow","api/datacube.api.workflow.band_stack","api/datacube.api.workflow.cell","api/datacube.api.workflow.cell_chunk","api/datacube.api.workflow.cell_dataset_band","api/datacube.api.workflow.cell_dataset_band_chunk","api/datacube.api.workflow.tile","api/datacube.config","api/modules","api_overview","api_reference","api_releases","api_tools","applications","index"],objects:{"":{datacube:[0,0,0,"-"]},"datacube.api":{dataset_type_arg:[1,4,1,""],dummy:[1,4,1,""],model:[2,0,0,"-"],output_format_arg:[1,4,1,""],parse_date_max:[1,4,1,""],parse_date_min:[1,4,1,""],pqa_mask_arg:[1,4,1,""],query:[3,0,0,"-"],readable_dir:[1,4,1,""],readable_file:[1,4,1,""],satellite_arg:[1,4,1,""],utils:[4,0,0,"-"],wofs_mask_arg:[1,4,1,""],workflow:[5,0,0,"-"],writeable_dir:[1,4,1,""]},"datacube.api.model":{Cell:[2,3,1,""],DatasetTile:[2,3,1,""],DatasetType:[2,3,1,""],DsmBands:[2,3,1,""],EviBands:[2,3,1,""],Fc25Bands:[2,3,1,""],Ls57Arg25Bands:[2,3,1,""],Ls5TmBands:[2,3,1,""],Ls7EtmBands:[2,3,1,""],Ls8Arg25Bands:[2,3,1,""],Ls8OLiTirsBands:[2,3,1,""],NbrBands:[2,3,1,""],NdviBands:[2,3,1,""],Pq25Bands:[2,3,1,""],Satellite:[2,3,1,""],TciBands:[2,3,1,""],Tile:[2,3,1,""],Wofs25Bands:[2,3,1,""],get_bands:[2,4,1,""],make_wofs_dataset:[2,4,1,""],parse_datetime:[2,4,1,""],warp_file_paths:[2,4,1,""]},"datacube.api.model.Cell":{from_csv_record:[2,5,1,""],from_db_record:[2,5,1,""],x:[2,2,1,""],xy:[2,2,1,""],y:[2,2,1,""]},"datacube.api.model.DatasetTile":{bands:[2,2,1,""],dataset_type:[2,2,1,""],from_db_array:[2,5,1,""],from_path:[2,5,1,""],from_string_array:[2,5,1,""],path:[2,2,1,""],satellite:[2,2,1,""]},"datacube.api.model.Tile":{acquisition_id:[2,2,1,""],datasets:[2,2,1,""],end_datetime:[2,2,1,""],end_datetime_month:[2,2,1,""],end_datetime_year:[2,2,1,""],from_csv_record:[2,5,1,""],from_db_record:[2,5,1,""],start_datetime:[2,2,1,""],x:[2,2,1,""],xy:[2,2,1,""],y:[2,2,1,""]},"datacube.api.query":{ProcessingLevel:[3,3,1,""],SortType:[3,3,1,""],TileClass:[3,3,1,""],TileType:[3,3,1,""],build_list_cells_missing_sql_and_params:[3,4,1,""],build_list_cells_sql_and_params:[3,4,1,""],build_list_tiles_missing_sql_and_params:[3,4,1,""],build_list_tiles_sql_and_params:[3,4,1,""],connect_to_db:[3,4,1,""],list_cells:[3,4,1,""],list_cells_as_generator:[3,4,1,""],list_cells_as_list:[3,4,1,""],list_cells_missing:[3,4,1,""],list_cells_missing_as_generator:[3,4,1,""],list_cells_missing_as_list:[3,4,1,""],list_cells_missing_to_file:[3,4,1,""],list_cells_to_file:[3,4,1,""],list_tiles:[3,4,1,""],list_tiles_as_generator:[3,4,1,""],list_tiles_as_list:[3,4,1,""],list_tiles_dtm:[3,4,1,""],list_tiles_dtm_as_generator:[3,4,1,""],list_tiles_dtm_as_list:[3,4,1,""],list_tiles_missing:[3,4,1,""],list_tiles_missing_as_generator:[3,4,1,""],list_tiles_missing_as_list:[3,4,1,""],list_tiles_missing_to_file:[3,4,1,""],list_tiles_to_file:[3,4,1,""],list_tiles_wkt:[3,4,1,""],list_tiles_wkt_to_file:[3,4,1,""],print_tile:[3,4,1,""],result_generator:[3,4,1,""],to_file_ify_sql:[3,4,1,""],visit_tiles:[3,4,1,""],visit_tiles_wkt:[3,4,1,""]},"datacube.api.utils":{DatasetBandMetaData:[4,3,1,""],DatasetMetaData:[4,3,1,""],OutputFormat:[4,3,1,""],PqaMask:[4,3,1,""],TasselCapIndex:[4,3,1,""],WofsMask:[4,3,1,""],apply_mask:[4,4,1,""],calculate_evi:[4,4,1,""],calculate_medoid:[4,4,1,""],calculate_nbr:[4,4,1,""],calculate_ndvi:[4,4,1,""],calculate_tassel_cap_index:[4,4,1,""],check_overwrite_remove_or_fail:[4,4,1,""],consolidate_masks:[4,4,1,""],date_to_integer:[4,4,1,""],empty_array:[4,4,1,""],extract_fields_from_filename:[4,4,1,""],format_date:[4,4,1,""],format_date_time:[4,4,1,""],get_band_name_intersection:[4,4,1,""],get_band_name_union:[4,4,1,""],get_dataset_band_stack_filename:[4,4,1,""],get_dataset_data:[4,4,1,""],get_dataset_data_masked:[4,4,1,""],get_dataset_data_with_pq:[4,4,1,""],get_dataset_datatype:[4,4,1,""],get_dataset_filename:[4,4,1,""],get_dataset_metadata:[4,4,1,""],get_dataset_ndv:[4,4,1,""],get_mask_pqa:[4,4,1,""],get_mask_vector_for_cell:[4,4,1,""],get_mask_wofs:[4,4,1,""],get_satellite_string:[4,4,1,""],intersection:[4,4,1,""],latlon_to_cell:[4,4,1,""],latlon_to_xy:[4,4,1,""],log_mem:[4,4,1,""],propagate_using_selected_pixel:[4,4,1,""],raster_create:[4,4,1,""],raster_create_envi:[4,4,1,""],raster_create_geotiff:[4,4,1,""],read_dataset_data:[4,4,1,""],subset:[4,4,1,""],union:[4,4,1,""]},"datacube.api.utils.DatasetBandMetaData":{data_type:[4,2,1,""],no_data_value:[4,2,1,""]},"datacube.api.utils.DatasetMetaData":{bands:[4,2,1,""],lr:[4,2,1,""],pixel_size_x:[4,2,1,""],pixel_size_y:[4,2,1,""],projection:[4,2,1,""],shape:[4,2,1,""],transform:[4,2,1,""],ul:[4,2,1,""]},"datacube.api.workflow":{CellListCsvTask:[5,3,1,""],CellTask:[5,3,1,""],ComplexParameter:[5,3,1,""],SummaryTask:[5,3,1,""],Task:[5,3,1,""],TileListCsvTask:[5,3,1,""],Workflow:[5,3,1,""],band_stack:[6,0,0,"-"],cell:[7,0,0,"-"],cell_chunk:[8,0,0,"-"],cell_dataset_band:[9,0,0,"-"],cell_dataset_band_chunk:[10,0,0,"-"],tile:[11,0,0,"-"]},"datacube.api.workflow.CellListCsvTask":{acq_max:[5,2,1,""],acq_min:[5,2,1,""],dataset_types:[5,2,1,""],output:[5,1,1,""],path:[5,2,1,""],run:[5,1,1,""],satellites:[5,2,1,""],task_namespace:[5,2,1,""],x_max:[5,2,1,""],x_min:[5,2,1,""],y_max:[5,2,1,""],y_min:[5,2,1,""]},"datacube.api.workflow.CellTask":{acq_max:[5,2,1,""],acq_min:[5,2,1,""],csv:[5,2,1,""],dummy:[5,2,1,""],get_dataset_types:[5,5,1,""],get_tile_csv_filename:[5,1,1,""],get_tiles:[5,1,1,""],get_tiles_from_csv:[5,1,1,""],get_tiles_from_db:[5,1,1,""],mask_pqa_apply:[5,2,1,""],mask_pqa_mask:[5,2,1,""],mask_wofs_apply:[5,2,1,""],mask_wofs_mask:[5,2,1,""],output_directory:[5,2,1,""],satellites:[5,2,1,""],task_namespace:[5,2,1,""],x:[5,2,1,""],y:[5,2,1,""]},"datacube.api.workflow.ComplexParameter":{serialize:[5,1,1,""]},"datacube.api.workflow.SummaryTask":{acq_max:[5,2,1,""],acq_min:[5,2,1,""],create_cell_tasks:[5,1,1,""],csv:[5,2,1,""],dummy:[5,2,1,""],get_cell_csv_filename:[5,1,1,""],get_cells:[5,1,1,""],get_cells_from_csv:[5,1,1,""],get_cells_from_db:[5,1,1,""],get_dataset_types:[5,5,1,""],mask_pqa_apply:[5,2,1,""],mask_pqa_mask:[5,2,1,""],mask_wofs_apply:[5,2,1,""],mask_wofs_mask:[5,2,1,""],output_directory:[5,2,1,""],requires:[5,1,1,""],satellites:[5,2,1,""],task_namespace:[5,2,1,""],x_max:[5,2,1,""],x_min:[5,2,1,""],y_max:[5,2,1,""],y_min:[5,2,1,""]},"datacube.api.workflow.Task":{complete:[5,1,1,""],task_namespace:[5,2,1,""]},"datacube.api.workflow.TileListCsvTask":{acq_max:[5,2,1,""],acq_min:[5,2,1,""],dataset_types:[5,2,1,""],output:[5,1,1,""],path:[5,2,1,""],run:[5,1,1,""],satellites:[5,2,1,""],task_namespace:[5,2,1,""],x_max:[5,2,1,""],x_min:[5,2,1,""],y_max:[5,2,1,""],y_min:[5,2,1,""]},"datacube.api.workflow.Workflow":{create_summary_tasks:[5,1,1,""],log_arguments:[5,1,1,""],process_arguments:[5,1,1,""],run:[5,1,1,""],setup_arguments:[5,1,1,""]},"datacube.api.workflow.band_stack":{BandStackCellDatasetBandTask:[6,3,1,""],BandStackCellTask:[6,3,1,""],BandStackSummaryTask:[6,3,1,""],BandStackWorkflow:[6,3,1,""],format_date_time:[6,4,1,""]},"datacube.api.workflow.band_stack.BandStackCellDatasetBandTask":{generate_raster_metadata:[6,1,1,""],output:[6,1,1,""],output_format:[6,2,1,""],run:[6,1,1,""],task_namespace:[6,2,1,""]},"datacube.api.workflow.band_stack.BandStackCellTask":{create_cell_dataset_band_task:[6,1,1,""],output_format:[6,2,1,""],task_namespace:[6,2,1,""]},"datacube.api.workflow.band_stack.BandStackSummaryTask":{create_cell_tasks:[6,1,1,""],output_format:[6,2,1,""],task_namespace:[6,2,1,""]},"datacube.api.workflow.band_stack.BandStackWorkflow":{create_summary_tasks:[6,1,1,""],get_supported_dataset_types:[6,1,1,""],log_arguments:[6,1,1,""],process_arguments:[6,1,1,""],setup_arguments:[6,1,1,""]},"datacube.api.workflow.cell":{CellTask:[7,3,1,""],SummaryTask:[7,3,1,""],Workflow:[7,3,1,""]},"datacube.api.workflow.cell.CellTask":{task_namespace:[7,2,1,""]},"datacube.api.workflow.cell.SummaryTask":{create_cell_tasks:[7,1,1,""],task_namespace:[7,2,1,""]},"datacube.api.workflow.cell.Workflow":{create_summary_tasks:[7,1,1,""],log_arguments:[7,1,1,""],process_arguments:[7,1,1,""],setup_arguments:[7,1,1,""]},"datacube.api.workflow.cell_chunk":{CellChunkTask:[8,3,1,""],CellTask:[8,3,1,""],SummaryTask:[8,3,1,""],Workflow:[8,3,1,""]},"datacube.api.workflow.cell_chunk.CellChunkTask":{acq_max:[8,2,1,""],acq_min:[8,2,1,""],chunk_size_x:[8,2,1,""],chunk_size_y:[8,2,1,""],csv:[8,2,1,""],dummy:[8,2,1,""],get_dataset_types:[8,5,1,""],get_tile_csv_filename:[8,1,1,""],get_tiles:[8,1,1,""],get_tiles_from_csv:[8,1,1,""],get_tiles_from_db:[8,1,1,""],mask_pqa_apply:[8,2,1,""],mask_pqa_mask:[8,2,1,""],mask_wofs_apply:[8,2,1,""],mask_wofs_mask:[8,2,1,""],output_directory:[8,2,1,""],satellites:[8,2,1,""],task_namespace:[8,2,1,""],x:[8,2,1,""],x_offset:[8,2,1,""],y:[8,2,1,""],y_offset:[8,2,1,""]},"datacube.api.workflow.cell_chunk.CellTask":{chunk_size_x:[8,2,1,""],chunk_size_y:[8,2,1,""],create_cell_chunk_task:[8,1,1,""],get_chunks:[8,1,1,""],requires:[8,1,1,""],task_namespace:[8,2,1,""]},"datacube.api.workflow.cell_chunk.SummaryTask":{chunk_size_x:[8,2,1,""],chunk_size_y:[8,2,1,""],create_cell_tasks:[8,1,1,""],task_namespace:[8,2,1,""]},"datacube.api.workflow.cell_chunk.Workflow":{create_summary_tasks:[8,1,1,""],log_arguments:[8,1,1,""],process_arguments:[8,1,1,""],setup_arguments:[8,1,1,""]},"datacube.api.workflow.cell_dataset_band":{BandListType:[9,3,1,""],CellDatasetBandTask:[9,3,1,""],CellTask:[9,3,1,""],SummaryTask:[9,3,1,""],Workflow:[9,3,1,""]},"datacube.api.workflow.cell_dataset_band.CellDatasetBandTask":{acq_max:[9,2,1,""],acq_min:[9,2,1,""],band:[9,2,1,""],csv:[9,2,1,""],dataset_type:[9,2,1,""],dummy:[9,2,1,""],get_tile_csv_filename:[9,1,1,""],get_tiles:[9,1,1,""],get_tiles_from_csv:[9,1,1,""],get_tiles_from_db:[9,1,1,""],mask_pqa_apply:[9,2,1,""],mask_pqa_mask:[9,2,1,""],mask_wofs_apply:[9,2,1,""],mask_wofs_mask:[9,2,1,""],output_directory:[9,2,1,""],satellites:[9,2,1,""],task_namespace:[9,2,1,""],x:[9,2,1,""],y:[9,2,1,""]},"datacube.api.workflow.cell_dataset_band.CellTask":{bands:[9,2,1,""],create_cell_dataset_band_task:[9,1,1,""],dataset_type:[9,2,1,""],requires:[9,1,1,""],task_namespace:[9,2,1,""]},"datacube.api.workflow.cell_dataset_band.SummaryTask":{bands:[9,2,1,""],create_cell_tasks:[9,1,1,""],dataset_type:[9,2,1,""],task_namespace:[9,2,1,""]},"datacube.api.workflow.cell_dataset_band.Workflow":{create_summary_tasks:[9,1,1,""],get_supported_dataset_types:[9,1,1,""],log_arguments:[9,1,1,""],process_arguments:[9,1,1,""],setup_arguments:[9,1,1,""]},"datacube.api.workflow.cell_dataset_band_chunk":{CellDatasetBandChunkTask:[10,3,1,""],CellDatasetBandTask:[10,3,1,""],CellTask:[10,3,1,""],SummaryTask:[10,3,1,""],Workflow:[10,3,1,""]},"datacube.api.workflow.cell_dataset_band_chunk.CellDatasetBandChunkTask":{acq_max:[10,2,1,""],acq_min:[10,2,1,""],band:[10,2,1,""],chunk_size_x:[10,2,1,""],chunk_size_y:[10,2,1,""],csv:[10,2,1,""],dataset_type:[10,2,1,""],dummy:[10,2,1,""],mask_pqa_apply:[10,2,1,""],mask_pqa_mask:[10,2,1,""],output_directory:[10,2,1,""],satellites:[10,2,1,""],task_namespace:[10,2,1,""],x:[10,2,1,""],x_offset:[10,2,1,""],y:[10,2,1,""],y_offset:[10,2,1,""]},"datacube.api.workflow.cell_dataset_band_chunk.CellDatasetBandTask":{acq_max:[10,2,1,""],acq_min:[10,2,1,""],band:[10,2,1,""],chunk_size_x:[10,2,1,""],chunk_size_y:[10,2,1,""],create_cell_dataset_band_chunk_task:[10,1,1,""],csv:[10,2,1,""],dataset_type:[10,2,1,""],dummy:[10,2,1,""],get_chunks:[10,1,1,""],mask_pqa_apply:[10,2,1,""],mask_pqa_mask:[10,2,1,""],output_directory:[10,2,1,""],requires:[10,1,1,""],satellites:[10,2,1,""],task_namespace:[10,2,1,""],x:[10,2,1,""],y:[10,2,1,""]},"datacube.api.workflow.cell_dataset_band_chunk.CellTask":{bands:[10,2,1,""],chunk_size_x:[10,2,1,""],chunk_size_y:[10,2,1,""],create_cell_dataset_band_task:[10,1,1,""],dataset_type:[10,2,1,""],requires:[10,1,1,""],task_namespace:[10,2,1,""]},"datacube.api.workflow.cell_dataset_band_chunk.SummaryTask":{bands:[10,2,1,""],chunk_size_x:[10,2,1,""],chunk_size_y:[10,2,1,""],create_cell_tasks:[10,1,1,""],dataset_type:[10,2,1,""],task_namespace:[10,2,1,""]},"datacube.api.workflow.cell_dataset_band_chunk.Workflow":{create_summary_tasks:[10,1,1,""],get_supported_dataset_types:[10,1,1,""],log_arguments:[10,1,1,""],process_arguments:[10,1,1,""],setup_arguments:[10,1,1,""]},"datacube.api.workflow.tile":{CellTask:[11,3,1,""],SummaryTask:[11,3,1,""],TileTask:[11,3,1,""],Workflow:[11,3,1,""]},"datacube.api.workflow.tile.CellTask":{create_tile_tasks:[11,1,1,""],requires:[11,1,1,""],task_namespace:[11,2,1,""]},"datacube.api.workflow.tile.SummaryTask":{create_cell_tasks:[11,1,1,""],task_namespace:[11,2,1,""]},"datacube.api.workflow.tile.TileTask":{acq_max:[11,2,1,""],acq_min:[11,2,1,""],csv:[11,2,1,""],dummy:[11,2,1,""],mask_pqa_apply:[11,2,1,""],mask_pqa_mask:[11,2,1,""],mask_wofs_apply:[11,2,1,""],mask_wofs_mask:[11,2,1,""],output_directory:[11,2,1,""],satellites:[11,2,1,""],task_namespace:[11,2,1,""],tile:[11,2,1,""],x:[11,2,1,""],y:[11,2,1,""]},"datacube.api.workflow.tile.Workflow":{create_summary_tasks:[11,1,1,""],log_arguments:[11,1,1,""],process_arguments:[11,1,1,""],setup_arguments:[11,1,1,""]},"datacube.config":{Config:[12,3,1,""]},"datacube.config.Config":{DatabaseKey:[12,3,1,""],Section:[12,3,1,""],get_db_database:[12,1,1,""],get_db_host:[12,1,1,""],get_db_password:[12,1,1,""],get_db_port:[12,1,1,""],get_db_username:[12,1,1,""],to_str:[12,1,1,""]},datacube:{api:[1,0,0,"-"],config:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","class","Python class"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:method","2":"py:attribute","3":"py:class","4":"py:function","5":"py:staticmethod"},terms:{"00000_":17,"00000_2013":17,"00025pixel":17,"01_2013":17,"01_2015":17,"01t01":17,"020_2013":17,"020_2013_12_01_2013_12_31":14,"025_2014":17,"02t01":17,"036_2013":17,"03t01":17,"04t01":17,"07994_":17,"09t02":17,"11t23":17,"120_":17,"123m":17,"12t01":17,"148_":17,"153m":14,"154m":17,"18t01":17,"19t01":17,"2013_12_01":17,"2013_12_02":17,"2013_12_09":17,"2013_12_18":17,"2013_12_31":17,"214m":17,"25000_":17,"25000_2013":17,"36939_1987":17,"4000x1":17,"50000_":17,"50000_2013":17,"50x50":14,"62m":17,"92m":[14,17],"_obs_":14,"_to_csv":14,"abstract":14,"boolean":4,"class":[2,3,4,5,6,7,8,9,10,11,12,14,17],"default":[4,17],"enum":[2,3,4,9,12],"export":16,"float":4,"function":3,"import":17,"int":[2,3,4],"null":17,"return":[2,3,4,12,14],"static":[2,5,8],"true":[14,17],"while":17,abil:[14,16,18],about:[14,19],abov:14,accur:18,acq:[14,17],acq_dat:17,acq_max:[3,5,8,9,10,11,14,17],acq_min:[3,5,8,9,10,11,14,17],acquir:[14,18],acquisit:[3,17,18],acquisition_d:17,acquisition_id:2,across:17,act:[14,17],adam:14,add:16,addit:[14,18],affect:18,after:[17,18],again:17,agdc:3,aggreg:18,aim:[17,18],algorithm:[14,18],all:[14,17,18],allow:[16,18],alon:14,also:[14,17],alwai:3,analysi:14,api:[],appli:[4,14,16,17,18],applic:[],apply_mask:[4,14],apr:17,april:18,area:[],area_or_point:17,arg25:[14,17],arg:[5,6,7,8,9,10,11],argument:17,around:19,arrai:[4,14],as_gener:3,as_list:3,asc:3,assess:18,assum:4,attribut:18,australia:18,australian_st:[14,17],autom:18,avail:[16,18,19],b20150427:16,b20150428:[16,17],b20150430:16,b20150505:16,b20150507:16,back:[14,17],backdrop:18,background:19,band:[2,9,10,18],band_1:17,band_2:17,band_3:17,band_4:17,band_id:4,band_stack:[5,14],bandlisttyp:[9,14],bandstackcelldatasetbandtask:[6,14],bandstackcelltask:[6,14],bandstacksummarytask:[6,14],bandstackworkflow:[6,14],bare:[],bare_soil:[14,17],base:[2,3,7,8,10,11,12],bash:17,basi:[14,18],basic:17,been:[14,18],behind:14,between:17,bin:16,block:17,blue:[4,17],booleanparamet:[5,8,9,10,11],both:[14,16,17],branch:16,bring:14,bsq:4,bug:16,build:[3,16],build_list_cells_missing_sql_and_param:3,build_list_cells_sql_and_param:3,build_list_tiles_missing_sql_and_param:3,build_list_tiles_sql_and_param:3,burn:4,bushfir:18,calcul:[4,17,18],calculate_evi:4,calculate_medoid:4,calculate_nbr:4,calculate_ndvi:4,calculate_tassel_cap_index:4,can:[14,17,18,19],cap:[14,18],capabl:18,cell:[2,3],cell_chunk:[],cell_dataset_band:[],cell_dataset_band_chunk:[],cellchunktask:8,celldatasetbandchunktask:10,celldatasetbandtask:[6,9,10,14],celllistcsvtask:5,celltask:[5,6,7,8,9,10,11,14],chang:[],check_overwrite_remove_or_fail:4,choic:18,chosen:17,chunk:[],chunk_size_i:[8,10],chunk_size_x:[8,10],clai:18,classifi:[14,18],clean:[],clear:[14,17],clearli:[14,18],cloud:[14,17,18],cloud_shadow:[14,17],coastal_aerosol:17,code:16,coeffici:4,colorinterp:17,combin:17,come:14,common:[14,17],comparison:18,compil:18,complet:[5,17,18],complexparamet:[5,11],compon:18,composit:18,config:3,configur:3,connect:3,connect_to_db:3,consolidate_mask:4,construct:2,contain:[4,17,18],contigu:[14,17,18],continent:18,convert:4,copi:18,correspond:18,could:18,count:14,coupl:17,cover:[14,17,18],crcsi:[],creat:[4,17],create_aoi_mask_for_cel:14,create_cell_chunk_task:8,create_cell_dataset_band_chunk_task:10,create_cell_dataset_band_task:[6,9,10],create_cell_task:[5,6,7,8,9,10,11,14],create_summary_task:[5,6,7,8,9,10,11],create_task:14,create_tile_task:11,creation:4,criteria:[3,14],csv:[8,10,11],cube:14,current:[14,18,19],cursor:3,dai:17,darl:18,dat:[14,17],data:[],data_typ:4,databasekei:12,dataset:[2,3],dataset_metadata:4,dataset_pqa:4,dataset_typ:[2,3,4,5,9,10,14,17],dataset_type_arg:1,datasetbandmetadata:4,datasetmetadata:4,datasettil:2,datasettyp:[2,3,14],date:[3,17,18],date_to_integ:4,dateparamet:[5,8,9,10,11],datetim:[2,3,14],decemb:17,deeper:18,def:14,defin:4,deform:18,delimit:17,deliv:18,dem:[14,17],dem_hydrologically_enforc:17,dem_smooth:17,depend:16,deprec:3,depth:14,deriv:[17,18],descript:17,desir:14,detail:[18,19],develop:18,dict:[3,4],dictionari:4,differ:[4,17],directli:14,directori:[14,17],discharg:18,dist:4,distribut:18,dodgi:2,doe:[4,14],don:[14,17],done:[4,17],down:17,drill:[16,17],driven:14,driver:17,drop:17,dry:[17,18],dsm:[14,16,17],dsmband:2,dtype:4,dummi:[1,5,8,9,10,11,14],dure:18,each:[14,17,18],earth:18,echo:17,ecw:18,effect:18,either:3,el8:16,empti:[4,17,18],empty_arrai:[4,14],end_datetim:2,end_datetime_month:2,end_datetime_year:2,enhanc:[4,16,18],enum34:16,envi:[14,16,17],epsg4326_1deg_0:17,etc:14,etm:18,evi:[4,14,17],eviband:2,excel:17,execut:17,exhaust:18,exist:[4,17],exit:17,expand:18,explicit:3,extend:14,extern:18,extract:17,extract_fields_from_filenam:4,fals:[4,14,17],favourit:14,fc25:[14,17],fc25band:2,featur:[4,14,17],field:17,file:[3,4,14,16,17,18],filenam:[2,3,4,14],fill:4,find:[14,17],first:[4,16,18],flag:[4,14],fledg:14,float32:17,focu:14,follow:[16,17,18],form:17,format:[3,14,16,17,18],format_d:4,format_date_tim:[4,6],formula:14,found:[17,19],fraction:[17,18],free:18,from:[2,4,14,16,17,18],from_csv_record:2,from_db_arrai:2,from_db_record:2,from_path:2,from_string_arrai:2,fudg:14,full:[14,18],fulli:14,func:3,futur:14,gdal:[4,16],gdalinfo:17,gener:[3,17],generate_raster_metadata:6,geo:4,geometr:18,geoscienc:18,geotiff:[4,17,18],geotransform:4,get:[12,14,17],get_band:2,get_band_name_intersect:4,get_band_name_union:4,get_cel:5,get_cell_csv_filenam:5,get_cells_from_csv:5,get_cells_from_db:5,get_chunk:[8,10],get_dataset_band_stack_filenam:4,get_dataset_data:[4,14],get_dataset_data_mask:[4,14],get_dataset_data_with_pq:4,get_dataset_datatyp:4,get_dataset_filenam:4,get_dataset_metadata:4,get_dataset_ndv:4,get_dataset_typ:[5,8],get_db_databas:12,get_db_host:12,get_db_password:12,get_db_port:12,get_db_usernam:12,get_mask_pqa:[4,14],get_mask_rang:14,get_mask_vector_for_cel:4,get_mask_wof:[4,14],get_satellite_str:4,get_supported_dataset_typ:[6,9,10],get_til:[5,8,9,14],get_tile_csv_filenam:[5,8,9],get_tiles_from_csv:[5,8,9],get_tiles_from_db:[5,8,9],github:16,give:14,given:[4,17,18],global:16,goal:18,grab:14,grai:17,graph:18,green:[14,17,18],grep:17,grid:17,groundwat:18,gtiff:[4,17],guid:19,have:[14,17,18],haven:14,hdr:[14,17],height:4,help:[14,17],hide:17,high:18,high_slop:17,higher:19,histori:17,home:16,host:12,how:14,iclass:17,ident:16,identifi:18,ifi:3,imag:18,imageri:18,implement:16,improv:14,includ:[17,18],incorpor:14,index:[4,14,15,16,17,18,19],indic:[],individu:14,info:[14,16,17],inform:[14,19],ingest:14,initi:[17,18],input:14,input_ndv:4,instal:16,instanc:[14,17],instrument:18,int16:[4,17],int32:4,interleav:4,intermedi:14,intern:18,intersect:4,intparamet:[5,8,9,10,11],iron:18,issu:[16,18],jan:17,kei:18,kml:14,kwarg:[5,6,7,8,9,10,11],label:17,landsat:[],landscap:[],lat:[4,17,18],latitud:[4,17],latlon_to_cel:4,latlon_to_xi:4,layer:[4,14,17],least:18,leo:14,less:17,let:14,lib:16,like:[14,16,17],list:3,list_cel:[3,14],list_cells_as_gener:3,list_cells_as_list:3,list_cells_miss:[3,14],list_cells_missing_as_gener:3,list_cells_missing_as_list:3,list_cells_missing_to_csv:14,list_cells_missing_to_fil:3,list_cells_to_csv:14,list_cells_to_fil:3,list_cells_vector_fil:14,list_cells_wkt:14,list_dataset:14,list_datasets_miss:14,list_datasets_missing_to_csv:14,list_datasets_to_csv:14,list_datasets_vector_fil:14,list_datasets_wkt:14,list_til:3,list_tiles_as_gener:3,list_tiles_as_list:3,list_tiles_dtm:3,list_tiles_dtm_as_gener:3,list_tiles_dtm_as_list:3,list_tiles_miss:3,list_tiles_missing_as_gener:3,list_tiles_missing_as_list:3,list_tiles_missing_to_fil:3,list_tiles_to_fil:3,list_tiles_wkt:3,list_tiles_wkt_to_fil:3,litholog:18,littl:[17,18],load:[16,18],loadabl:16,local:14,localtarget:14,locat:17,log_argu:[5,6,7,8,9,10,11],log_mem:4,logic:14,lon:[4,17,18],longer:18,longitud:[4,17],loop:17,low:18,lower:18,ls578_nbar_with_pqa_stack_blue_120_:14,ls578_nbar_with_pqa_stack_coastal_aerosol_120_:14,ls578_nbar_with_pqa_stack_green_120_:14,ls578_nbar_with_pqa_stack_near_infrared_120_:14,ls578_nbar_with_pqa_stack_red_120_:14,ls578_nbar_with_pqa_stack_short_wave_infrared_1_120_:14,ls578_nbar_with_pqa_stack_short_wave_infrared_2_120_:14,ls57arg25band:2,ls5:[14,17],ls5tmband:2,ls7:[14,17],ls7_etm:17,ls7_etm_fc_120_:17,ls7_etm_fc_with_pqa_120_:17,ls7_etm_nbar_with_pqa_stack_blue_120_:17,ls7_etm_nbar_with_pqa_stack_green_120_:17,ls7_etm_nbar_with_pqa_stack_near_infrared_120_:17,ls7_etm_nbar_with_pqa_stack_red_120_:17,ls7_etm_nbar_with_pqa_stack_short_wave_infrared_1_120_:17,ls7_etm_nbar_with_pqa_stack_short_wave_infrared_2_120_:17,ls7_etm_pqa_120_:17,ls7_nbar_120:17,ls7_nbar_121:17,ls7_nbar_122:17,ls7etmband:2,ls8:[14,17],ls8_fc_with_pqa_stack_bare_soil_120_:14,ls8_fc_with_pqa_stack_non_photosynthetic_vegetation_120_:14,ls8_fc_with_pqa_stack_photosynthetic_vegetation_120_:14,ls8_fc_with_pqa_stack_unmixing_error_120_:14,ls8_nbar:14,ls8_oli_tir:17,ls8_oli_tirs_fc_120_:17,ls8_oli_tirs_fc_with_pqa_120_:17,ls8_oli_tirs_fc_with_pqa_stack_bare_soil_120_:17,ls8_oli_tirs_fc_with_pqa_stack_non_photosynthetic_vegetation_120_:17,ls8_oli_tirs_fc_with_pqa_stack_photosynthetic_vegetation_120_:17,ls8_oli_tirs_fc_with_pqa_stack_unmixing_error_120_:17,ls8_oli_tirs_nbar_120_:17,ls8_oli_tirs_nbar_148_:17,ls8_oli_tirs_nbar_with_pqa_120_:17,ls8_oli_tirs_nbar_with_pqa_148_:17,ls8_oli_tirs_nbar_with_pqa_stack_coastal_aerosol_120_:17,ls8_oli_tirs_nbar_with_pqa_vector_148_:17,ls8_oli_tirs_nbr_with_pqa_120_:17,ls8_oli_tirs_ndvi_with_pqa_120_:17,ls8_oli_tirs_pqa_120_:17,ls8_oli_tirs_pqa_148_:17,ls8arg25band:2,ls8olitirsband:2,ls_wofs_150:17,luigi:[5,6,8,9,10,11,16],made:18,mai:[14,17],mainland:17,make:18,make_wofs_dataset:2,manag:14,mani:14,map:[17,18],march:[14,18],mask:[],mask_pqa_appli:[4,5,8,9,10,11,14],mask_pqa_mask:[5,8,9,10,11,14],mask_vector_appli:4,mask_vector_featur:17,mask_vector_fil:17,mask_vector_lay:17,mask_wofs_appli:[4,5,8,9,11,14],mask_wofs_mask:[5,8,9,11,14],maskedarrai:4,masks_pqa:4,match:[3,14,17],materi:18,max:[4,14,17],maximum:[17,18],mayb:14,mean:[17,18],meet:18,messag:17,metadata:17,method:2,min:[4,14,17],miner:18,minimum:[17,18],miss:[14,16],mix:17,mkdir:16,mode:16,model:[],modi:4,modulefil:16,modulesfil:[],moduleshelp:16,month:17,monthli:18,more:[4,14,17,18],mosaic:[],mosaic_cach:17,most:18,move:3,mpi:16,my_module_dir:16,my_module_nam:16,my_module_vers:16,name:[4,5,7,8,9,10,11,16],nan:[4,17],nation:18,nativ:4,nbar:[2,3,14,17],nbr:[4,14,17],nbrband:2,nci:16,ndv:[4,14],ndvi:[],ndviband:2,near_infrar:17,need:18,nir:4,no_data:17,no_data_valu:4,nodata:17,non:[14,16,17,18],non_photosynthetic_veget:17,none:[2,3,4,5,6,7,8,9,10,11,12,14],normalis:4,note:[],novemb:18,npp:17,number:18,numpi:[4,14,16],object:[5,6,8,9,10,11],obs_count:14,observ:[14,17,18],observationcountcelltask:14,observationcountsummarytask:14,observationcountworkflow:14,obtain:16,octob:[17,18],ogc:18,omit:17,onli:[3,17],oper:16,opt:16,option:[4,17,18],ord:18,order:[3,18],origin:17,out:[14,17,18],output:3,output_directori:[5,8,9,10,11,14,17],output_format:[4,6,14],output_format_arg:1,output_ndv:4,outputformat:[4,14],outsid:[14,18],over:[16,17,18],overwrit:[4,17],own:14,oxid:18,page:[14,15,16,17,18,19],pair:[4,17],param:[2,3],paramet:[3,4,5,6,8,9,10,11,17],parse_date_max:1,parse_date_min:1,parse_datetim:2,path:[1,2,4,5,12,14,16],pclass:17,peopl:17,per:[14,18],percentag:18,percentil:18,period:18,photosynthet:18,photosynthetic_veget:17,physic:[14,17],pixel:[],pixel_quality_filt:17,pixel_size_i:4,pixel_size_x:4,png:17,point:14,polygon:[4,14,18],popul:18,pq25:[14,17],pq25band:2,pq_mask_clear:[4,14,17],pq_mask_cloud:17,pq_mask_cloud_acca:17,pq_mask_cloud_fmask:17,pq_mask_cloud_shadow_acca:17,pq_mask_cloud_shadow_fmask:17,pq_mask_contigu:17,pq_mask_land:17,pq_mask_satur:17,pq_mask_saturation_opt:17,pq_mask_saturation_therm:17,pqa:[],pqa_mask:4,pqa_mask_arg:1,pqa_mask_clear:14,pqamask:[4,14,17],prefix:16,prepend:16,present:[3,14],print_til:3,proc:16,process:[14,18],process_argu:[5,6,7,8,9,10,11],processinglevel:3,produc:[14,18],project:[4,16,18],propagate_using_selected_pixel:4,prospective_dir:1,prospective_fil:1,proven:18,provid:[14,18],psutil:16,psycopg2:[3,16],put:16,pwd:17,python2:16,pythonpath:16,qualiti:[4,17,18],quarterli:18,queri:[],quiet:17,quit:17,radiometr:18,raijin:16,rang:3,raster:[4,14,17,18],raster_cr:[4,14],raster_create_envi:4,raster_create_geotiff:4,rather:[3,14,17],ratio:4,read:[4,17],read_dataset_data:4,readable_dir:1,readable_fil:1,recent:18,recharg:18,record:[2,17],red:[4,14,17],reflect:[14,17,18],region:14,regolith:18,regular:18,relev:18,remain:18,remov:16,replac:14,report:18,repositori:16,repres:[4,14,17,18],request:17,requir:[3,5,8,9,10,11],result:[14,16],result_gener:3,retriev:[],retrieve_dataset:17,retrieve_dataset_stack:17,retrieve_pixel_time_seri:17,reusabl:3,river:18,rs0:17,run:[5,6,14,17,18],same:14,sat:17,satellit:[2,3,4,5,8,9,10,11,14,16,17,18],satellite_arg:1,satellite_id:2,satur:[14,17,18],saturation_contigu:17,scale:18,scene:14,schedul:14,scheme:18,scipi:16,script:17,sea_wat:17,search:[14,15,16,17,18,19],season:18,section:12,select:[17,18],self:14,sentinel:18,separ:17,seri:[],serial:5,servic:18,set:[14,16,17,18,19],setup:16,setup_argu:[5,6,7,8,9,10,11],shadow:[14,18],shape:[4,14],short_wave_infrared_1:17,short_wave_infrared_2:17,should:17,show:[14,17],shp:[14,17],silica:18,simpli:17,singl:[3,14],site:16,size:[3,4,17],sjo547:[14,17],sjo:17,slice:18,soil:[],some:14,someth:[14,16,17],soon:14,sort:[3,17],sorttyp:3,sourc:[1,2,3,4,5,6,7,8,9,10,11,12,16],space:[14,17,18],spatial:[14,18],specif:14,specifi:[3,4,17,18],split:14,sql:3,stack:18,stakehold:18,stand:14,standard:[4,18],start:[4,14,18],start_datetim:2,statist:[14,18],stddev:17,stderr:16,step:16,str:[2,3,4],string:3,structur:14,stuff:14,subset:[4,14],summaris:[17,18],summarytask:[5,6,7,8,9,10,11,14],suppli:[3,18],support:[16,17,18],surfac:[14,17,18],swir:4,system:18,systemat:18,tag:16,take:14,target:18,task:[5,8,9,10,11,14],task_namespac:[5,6,7,8,9,10,11],tassel:[14,18],tasselcapindex:4,tci:[14,17],tciband:2,tcwi:18,tempor:18,term:18,terrain_shadow:17,test:[3,17],text:17,than:[3,14,17],them:[14,17],thi:[14,16,17,18],those:14,thought:14,through:[14,18],tif:[14,17],tile:[2,3],tileclass:3,tilelistcsvtask:5,tiletask:11,tiletyp:3,time:[],tmp:[14,17],to_file_ify_sql:3,to_str:12,togeth:14,total:[14,17,18],transform:[4,18],treat:14,turn:14,twci:18,txt:17,type:[2,3,4,14,17],type_id:2,typic:18,u46:[14,16,17],unclear:14,undefin:17,understand:18,union:4,unload:16,unmask:18,unmixing_error:17,unset:17,until:[14,18],updat:4,upon:18,usag:[17,19],user:19,util:[],utilis:18,v10:17,valid:14,valu:[],variou:19,vector:[4,14,16,17,18],vector_featur:4,vector_fil:4,vector_lay:4,veget:[4,18],verbos:17,versa:17,version:[14,16],versu:18,via:[17,18],vice:17,virtual:[14,17],visit_til:3,visit_tiles_wkt:3,visualis:18,vrt:17,wai:14,warp_file_path:2,water:[],weather:18,web:18,weekli:18,well:18,were:18,wet:[],what:17,whati:16,where:[14,17,18],which:[4,14,17,18],white:17,whose:18,why:14,width:4,within:[4,18],witl:18,wkb:14,wkt:[3,14],wof:[],wofs25band:2,wofs_mask:4,wofs_mask_arg:1,wofsmask:4,worker:14,workflow:[],would:[14,17],write:[3,17],writeable_dir:1,x_index:[2,17],x_max:[5,14],x_min:[5,14],x_offset:[8,10],x_size:4,y_index:[2,17],y_max:5,y_min:5,y_offset:[8,10],y_size:4,year:[3,17],yearli:18,yet:14,yield:14,you:[14,17],your:[14,17],yyyi:17},titles:["datacube package","datacube.api package","datacube.api.model module","datacube.api.query module","datacube.api.utils module","datacube.api.workflow package","datacube.api.workflow.band_stack module","datacube.api.workflow.cell module","datacube.api.workflow.cell_chunk module","datacube.api.workflow.cell_dataset_band module","datacube.api.workflow.cell_dataset_band_chunk module","datacube.api.workflow.tile module","datacube.config module","python","API Overview","API Python Function Reference","API Releases","API Command Line Tools","API Applications","AGDC API Overview"],titleterms:{"function":[15,19],access:14,actual:14,agdc:[16,19],aka:14,aoi:14,api:[1,2,3,4,5,6,7,8,9,10,11,14,15,16,17,18,19],applic:[18,19],area:18,band:14,band_stack:6,bare:18,base:14,batch:17,big:18,cell:[7,14],cell_chunk:8,cell_dataset_band:9,cell_dataset_band_chunk:10,chang:17,chunk:14,clean:18,command:[17,19],config:12,content:[0,1,5],crcsi:18,csv:14,data:[14,18],datacub:[0,1,2,3,4,5,6,7,8,9,10,11,12],dataset:[14,17],detect:17,entiti:14,environment:18,exampl:[14,17],extent:17,filter:14,indic:[14,15,16,17,18,19],interest:18,landsat:18,landscap:18,level:18,line:[17,19],list:14,mask:14,model:[2,14],modul:[0,1,2,3,4,5,6,7,8,9,10,11,12],monitor:18,mosaic:18,ndvi:14,note:[],other:14,output:18,overview:[14,18,19],packag:[0,1,5,16],pixel:[14,17,18],pqa:14,product:18,python:[13,15,19],queri:[3,14],rang:14,refer:[15,19],releas:[16,19],retriev:17,rudimentari:17,seri:17,snapshot:16,soil:18,stack:[14,17],submodul:[0,1,5],subpackag:[0,1],summari:18,tabl:[14,15,16,17,18,19],tile:11,time:17,tool:[17,19],util:4,valu:14,veri:17,water:17,wet:18,wof:[14,17],workflow:[5,6,7,8,9,10,11,14]}})