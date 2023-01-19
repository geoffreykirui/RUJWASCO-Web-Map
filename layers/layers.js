ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([4092357.389940, -141042.410770, 4151556.082425, -111198.778314]);
var wms_layers = [];

var format_Sewer_Treatment_Works_0 = new ol.format.GeoJSON();
var features_Sewer_Treatment_Works_0 = format_Sewer_Treatment_Works_0.readFeatures(json_Sewer_Treatment_Works_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sewer_Treatment_Works_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sewer_Treatment_Works_0.addFeatures(features_Sewer_Treatment_Works_0);
var lyr_Sewer_Treatment_Works_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sewer_Treatment_Works_0, 
                style: style_Sewer_Treatment_Works_0,
                interactive: true,
                title: '<img src="styles/legend/Sewer_Treatment_Works_0.png" /> Sewer_Treatment_Works'
            });
var format_Sewer_Pipeline_1 = new ol.format.GeoJSON();
var features_Sewer_Pipeline_1 = format_Sewer_Pipeline_1.readFeatures(json_Sewer_Pipeline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sewer_Pipeline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sewer_Pipeline_1.addFeatures(features_Sewer_Pipeline_1);
var lyr_Sewer_Pipeline_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sewer_Pipeline_1,
maxResolution:26.557755430836107,
 
                style: style_Sewer_Pipeline_1,
                interactive: true,
                title: '<img src="styles/legend/Sewer_Pipeline_1.png" /> Sewer_Pipeline'
            });
var format_Sewer_Manhole_2 = new ol.format.GeoJSON();
var features_Sewer_Manhole_2 = format_Sewer_Manhole_2.readFeatures(json_Sewer_Manhole_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sewer_Manhole_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sewer_Manhole_2.addFeatures(features_Sewer_Manhole_2);cluster_Sewer_Manhole_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Sewer_Manhole_2
});
var lyr_Sewer_Manhole_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Sewer_Manhole_2,
maxResolution:26.557755430836107,
 
                style: style_Sewer_Manhole_2,
                interactive: true,
                title: '<img src="styles/legend/Sewer_Manhole_2.png" /> Sewer_Manhole'
            });
var format_Water_Pipeline_3 = new ol.format.GeoJSON();
var features_Water_Pipeline_3 = format_Water_Pipeline_3.readFeatures(json_Water_Pipeline_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_Pipeline_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Pipeline_3.addFeatures(features_Water_Pipeline_3);
var lyr_Water_Pipeline_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_Pipeline_3,
maxResolution:38.94245054201244,
 
                style: style_Water_Pipeline_3,
                interactive: true,
                title: '<img src="styles/legend/Water_Pipeline_3.png" /> Water_Pipeline'
            });
var format_Reservoir_4 = new ol.format.GeoJSON();
var features_Reservoir_4 = format_Reservoir_4.readFeatures(json_Reservoir_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reservoir_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservoir_4.addFeatures(features_Reservoir_4);
var lyr_Reservoir_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reservoir_4, 
                style: style_Reservoir_4,
                interactive: true,
                title: '<img src="styles/legend/Reservoir_4.png" /> Reservoir'
            });
var format_Bulk_Meters_5 = new ol.format.GeoJSON();
var features_Bulk_Meters_5 = format_Bulk_Meters_5.readFeatures(json_Bulk_Meters_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bulk_Meters_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bulk_Meters_5.addFeatures(features_Bulk_Meters_5);
var lyr_Bulk_Meters_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bulk_Meters_5, 
                style: style_Bulk_Meters_5,
                interactive: true,
                title: '<img src="styles/legend/Bulk_Meters_5.png" /> Bulk_Meters'
            });
var format_Appurtenance_6 = new ol.format.GeoJSON();
var features_Appurtenance_6 = format_Appurtenance_6.readFeatures(json_Appurtenance_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Appurtenance_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Appurtenance_6.addFeatures(features_Appurtenance_6);
var lyr_Appurtenance_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Appurtenance_6,
maxResolution:8.080128618912145,
 
                style: style_Appurtenance_6,
                interactive: true,
                title: '<img src="styles/legend/Appurtenance_6.png" /> Appurtenance'
            });
var format_Water_Treatment_Plant_7 = new ol.format.GeoJSON();
var features_Water_Treatment_Plant_7 = format_Water_Treatment_Plant_7.readFeatures(json_Water_Treatment_Plant_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_Treatment_Plant_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Treatment_Plant_7.addFeatures(features_Water_Treatment_Plant_7);
var lyr_Water_Treatment_Plant_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_Treatment_Plant_7, 
                style: style_Water_Treatment_Plant_7,
                interactive: true,
                title: '<img src="styles/legend/Water_Treatment_Plant_7.png" /> Water_Treatment_Plant'
            });
var format_Water_Source_8 = new ol.format.GeoJSON();
var features_Water_Source_8 = format_Water_Source_8.readFeatures(json_Water_Source_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_Source_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Source_8.addFeatures(features_Water_Source_8);
var lyr_Water_Source_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_Source_8, 
                style: style_Water_Source_8,
                interactive: true,
                title: '<img src="styles/legend/Water_Source_8.png" /> Water_Source'
            });
var format_Zones_9 = new ol.format.GeoJSON();
var features_Zones_9 = format_Zones_9.readFeatures(json_Zones_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zones_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zones_9.addFeatures(features_Zones_9);
var lyr_Zones_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zones_9,
maxResolution:39.48629727468936,
 
                style: style_Zones_9,
                interactive: true,
                title: '<img src="styles/legend/Zones_9.png" /> Zones'
            });
var format_Actual_Serviced_Area_10 = new ol.format.GeoJSON();
var features_Actual_Serviced_Area_10 = format_Actual_Serviced_Area_10.readFeatures(json_Actual_Serviced_Area_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Actual_Serviced_Area_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Actual_Serviced_Area_10.addFeatures(features_Actual_Serviced_Area_10);
var lyr_Actual_Serviced_Area_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Actual_Serviced_Area_10, 
                style: style_Actual_Serviced_Area_10,
                interactive: true,
                title: '<img src="styles/legend/Actual_Serviced_Area_10.png" /> Actual_Serviced_Area'
            });
var format_plot_11 = new ol.format.GeoJSON();
var features_plot_11 = format_plot_11.readFeatures(json_plot_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_plot_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_plot_11.addFeatures(features_plot_11);
var lyr_plot_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_plot_11,
maxResolution:4.03992428712531,
 
                style: style_plot_11,
                interactive: true,
                title: '<img src="styles/legend/plot_11.png" /> plot'
            });
var format_Low_Income_Area_12 = new ol.format.GeoJSON();
var features_Low_Income_Area_12 = format_Low_Income_Area_12.readFeatures(json_Low_Income_Area_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Low_Income_Area_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Low_Income_Area_12.addFeatures(features_Low_Income_Area_12);
var lyr_Low_Income_Area_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Low_Income_Area_12, 
                style: style_Low_Income_Area_12,
                interactive: true,
                title: '<img src="styles/legend/Low_Income_Area_12.png" /> Low_Income_Area'
            });
var format_District_Metering_Area_13 = new ol.format.GeoJSON();
var features_District_Metering_Area_13 = format_District_Metering_Area_13.readFeatures(json_District_Metering_Area_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_Metering_Area_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_Metering_Area_13.addFeatures(features_District_Metering_Area_13);
var lyr_District_Metering_Area_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_Metering_Area_13, 
                style: style_District_Metering_Area_13,
                interactive: true,
                title: '<img src="styles/legend/District_Metering_Area_13.png" /> District_Metering_Area'
            });
var format_Licenced_Water_ServiceArea_14 = new ol.format.GeoJSON();
var features_Licenced_Water_ServiceArea_14 = format_Licenced_Water_ServiceArea_14.readFeatures(json_Licenced_Water_ServiceArea_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Licenced_Water_ServiceArea_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Licenced_Water_ServiceArea_14.addFeatures(features_Licenced_Water_ServiceArea_14);
var lyr_Licenced_Water_ServiceArea_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Licenced_Water_ServiceArea_14, 
                style: style_Licenced_Water_ServiceArea_14,
                interactive: true,
                title: '<img src="styles/legend/Licenced_Water_ServiceArea_14.png" /> Licenced_Water_Service-Area'
            });

lyr_Sewer_Treatment_Works_0.setVisible(true);lyr_Sewer_Pipeline_1.setVisible(false);lyr_Sewer_Manhole_2.setVisible(false);lyr_Water_Pipeline_3.setVisible(false);lyr_Reservoir_4.setVisible(false);lyr_Bulk_Meters_5.setVisible(false);lyr_Appurtenance_6.setVisible(true);lyr_Water_Treatment_Plant_7.setVisible(true);lyr_Water_Source_8.setVisible(true);lyr_Zones_9.setVisible(true);lyr_Actual_Serviced_Area_10.setVisible(true);lyr_plot_11.setVisible(false);lyr_Low_Income_Area_12.setVisible(false);lyr_District_Metering_Area_13.setVisible(false);lyr_Licenced_Water_ServiceArea_14.setVisible(true);
var layersList = [lyr_Sewer_Treatment_Works_0,lyr_Sewer_Pipeline_1,lyr_Sewer_Manhole_2,lyr_Water_Pipeline_3,lyr_Reservoir_4,lyr_Bulk_Meters_5,lyr_Appurtenance_6,lyr_Water_Treatment_Plant_7,lyr_Water_Source_8,lyr_Zones_9,lyr_Actual_Serviced_Area_10,lyr_plot_11,lyr_Low_Income_Area_12,lyr_District_Metering_Area_13,lyr_Licenced_Water_ServiceArea_14];
lyr_Sewer_Treatment_Works_0.set('fieldAliases', {'name': 'name', 'comments': 'comments', 'capacity': 'capacity', 'dsgn_capct': 'dsgn_capct', 'op_capcty': 'op_capcty', 'wsp': 'wsp', 'wwda': 'wwda', 'county': 'county', 'zone': 'zone', 'top_elev': 'top_elev', 'custom_t_e': 'custom_t_e', 'sys_top_el': 'sys_top_el', 'ymax': 'ymax', 'custom_yma': 'custom_yma', 'sys_ymax': 'sys_ymax', 'custom_ele': 'custom_ele', 'sys_elev': 'sys_elev', 'material': 'material', 'work': 'work', 'owner': 'owner', 'work_end': 'work_end', 'enddate': 'enddate', 'bultdate': 'bultdate', 'state': 'state', 'function': 'function', 'type': 'type', 'wwda_id': 'wwda_id', 'county_id': 'county_id', 'zone_id': 'zone_id', });
lyr_Sewer_Pipeline_1.set('fieldAliases', {'wsp': 'wsp', 'datemapped': 'datemapped', 'wwda': 'wwda', 'wwda_id': 'wwda_id', 'county': 'county', 'county_id': 'county_id', 'zone_id': 'zone_id', 'zone': 'zone', 'remark': 'remark', 'pipe_yoc': 'pipe_yoc', 'node_1_id': 'node_1_id', 'node_1_typ': 'node_1_typ', 'y1': 'y1', 'custom_y1': 'custom_y1', 'elev1': 'elev1', 'cust_ele1': 'cust_ele1', 'sys_elev1': 'sys_elev1', 'sys_y1': 'sys_y1', 'r1': 'r1', 'z1': 'z1', 'node_2_id': 'node_2_id', 'node_2_typ': 'node_2_typ', 'y2': 'y2', 'custom_y2': 'custom_y2', 'elev2': 'elev2', 'cust_elev2': 'cust_elev2', 'sys_elev2': 'sys_elev2', 'sys_y2': 'sys_y2', 'r2': 'r2', 'z2': 'z2', 'slope': 'slope', 'material_1': 'material_1', 'pipe_shape': 'pipe_shape', 'state': 'state', 'gis_length': 'gis_length', 'observ': 'observ', 'work_1': 'work_1', 'bultdate': 'bultdate', 'enddate': 'enddate', 'builder': 'builder', 'owner_1': 'owner_1', 'link': 'link', 'street_nam': 'street_nam', 'verified': 'verified', 'publish': 'publish', 'descript': 'descript', 'tstamp': 'tstamp', 'pavement': 'pavement', 'diameter_1': 'diameter_1', 'diam_units': 'diam_units', 'builder_de': 'builder_de', 'catalog': 'catalog', });
lyr_Sewer_Manhole_2.set('fieldAliases', {'remarks': 'remarks', 'wwda': 'wwda', 'wwda_id': 'wwda_id', 'county': 'county', 'county_id': 'county_id', 'top_elev': 'top_elev', 'ymax': 'ymax', 'type': 'type', 'material': 'material', 'wsp': 'wsp', 'zone': 'zone', 'zone_id': 'zone_id', 'state': 'state', 'observ': 'observ', 'work': 'work', 'builder': 'builder', 'built_date': 'built_date', 'end_date': 'end_date', 'owner': 'owner', 'streetname': 'streetname', 'link': 'link', 'verified': 'verified', 'pupblish': 'pupblish', 'invert': 'invert', 'status': 'status', 'line_name': 'line_name', 'dimensions': 'dimensions', 'vulnerabil': 'vulnerabil', 'maintainer': 'maintainer', 'diameter': 'diameter', 'diam_unit': 'diam_unit', 'shape': 'shape', 'mh_cover': 'mh_cover', 'mh_name': 'mh_name', 'mh_cover_m': 'mh_cover_m', 'sys_top_e': 'sys_top_e', 'sys_ymax': 'sys_ymax', 'sys_elev': 'sys_elev', 'trench_dep': 'trench_dep', });
lyr_Water_Pipeline_3.set('fieldAliases', {'type': 'type', 'wsp': 'wsp', 'label': 'label', 'status': 'status', 'zone': 'zone', 'pressure_z': 'pressure_z', 'route': 'route', 'node_1_id': 'node_1_id', 'node_1': 'node_1', 'node_2_id': 'node_2_id', 'node_2': 'node_2', 'elev_1': 'elev_1', 'deph1': 'deph1', 'elev_2': 'elev_2', 'depth2': 'depth2', 'arccat': 'arccat', 'arc_type': 'arc_type', 'material': 'material', 'wwda_id': 'wwda_id', 'wwda': 'wwda', 'county_id': 'county_id', 'county': 'county', 'zone_id': 'zone_id', 'state': 'state', 'observ': 'observ', 'gis_length': 'gis_length', 'work': 'work', 'work_end': 'work_end', 'builder': 'builder', 'builtdate': 'builtdate', 'enddate': 'enddate', 'owner': 'owner', 'streetname': 'streetname', 'desc': 'desc', 'link': 'link', 'verified': 'verified', 'diam': 'diam', 'class': 'class', 'yearofcon': 'yearofcon', 'category': 'category', });
lyr_Reservoir_4.set('fieldAliases', {'material': 'material', 'elevation': 'elevation', 'zone': 'zone', 'type': 'type', 'wsp': 'wsp', 'inst_mode': 'inst_mode', 'pipe_size1': 'pipe_size1', 'pipe_size2': 'pipe_size2', 'instdate': 'instdate', 'function': 'function', 'press_zone': 'press_zone', 'height': 'height', 'state': 'state', 'capacity': 'capacity', 'desc': 'desc', 'obsevation': 'obsevation', 'wwda_id': 'wwda_id', 'wwda': 'wwda', 'county_id': 'county_id', 'county': 'county', 'zone_id': 'zone_id', });
lyr_Bulk_Meters_5.set('fieldAliases', {'region': 'region', 'location': 'location', 'installdat': 'installdat', 'status': 'status', 'meter_type': 'meter_type', 'remarks': 'remarks', 'conditions': 'conditions', 'type': 'type', 'wsp': 'wsp', 'material': 'material', 'state': 'state', 'serial_no': 'serial_no', 'label': 'label', 'dma': 'dma', 'outflow_dm': 'outflow_dm', 'diameter': 'diameter', 'desc': 'desc', 'inflow_dma': 'inflow_dma', 'wwda_id': 'wwda_id', 'wwda': 'wwda', 'county_id': 'county_id', 'county': 'county', 'zone_id': 'zone_id', 'zone': 'zone', });
lyr_Appurtenance_6.set('fieldAliases', {'material': 'material', 'wsp': 'wsp', 'diameter': 'diameter', 'type': 'type', 'label': 'label', 'location': 'location', 'elevation': 'elevation', 'pipe_type': 'pipe_type', 'contractor': 'contractor', 'status': 'status', 'zone': 'zone', 'street': 'street', 'work': 'work', 'code': 'code', 'desc': 'desc', 'comments': 'comments', 'bult_date': 'bult_date', 'wwda_id': 'wwda_id', 'wwda': 'wwda', 'county_id': 'county_id', 'county': 'county', 'zone_id': 'zone_id', });
lyr_Water_Treatment_Plant_7.set('fieldAliases', {'des_capcty': 'des_capcty', 'oper_capct': 'oper_capct', 'wsp': 'wsp', 'elev': 'elev', 'depth': 'depth', 'type': 'type', 'sys_type': 'sys_type', 'material': 'material', 'wwda': 'wwda', 'wwda_id': 'wwda_id', 'county': 'county', 'county_id': 'county_id', 'zone': 'zone', 'zone_id': 'zone_id', 'state': 'state', 'observ': 'observ', 'comment': 'comment', 'work': 'work', 'work_end': 'work_end', 'builddate': 'builddate', 'enddate': 'enddate', 'builder': 'builder', 'owner': 'owner', 'streetname': 'streetname', 'desc': 'desc', 'verified': 'verified', 'name': 'name', });
lyr_Water_Source_8.set('fieldAliases', {'elevation': 'elevation', 'depth': 'depth', 'type': 'type', 'sys_type': 'sys_type', 'nodecat_id': 'nodecat_id', 'epa_type': 'epa_type', 'observ': 'observ', 'comment': 'comment', 'location': 'location', 'workcat_id': 'workcat_id', 'builtdate': 'builtdate', 'enddate': 'enddate', 'buildercat': 'buildercat', 'streetname': 'streetname', 'desc': 'desc', 'link': 'link', 'verified': 'verified', 'label': 'label', 'publish': 'publish', 'state': 'state', 'wsp': 'wsp', 'name': 'name', 'yield': 'yield', 'power sour': 'power sour', 'remarks': 'remarks', 'dsgn_capac': 'dsgn_capac', 'avg_ms_day': 'avg_ms_day', 'descriptio': 'descriptio', 'managedby': 'managedby', 'ownership': 'ownership', 'owner': 'owner', 'wwda_id': 'wwda_id', 'wwda': 'wwda', 'county_id': 'county_id', 'county': 'county', 'zone_id': 'zone_id', 'zone': 'zone', });
lyr_Zones_9.set('fieldAliases', {'wsp': 'wsp', 'name': 'name', 'desc': 'desc', 'link': 'link', 'wwda_id': 'wwda_id', 'wwda': 'wwda', 'county_id': 'county_id', 'county': 'county', });
lyr_Actual_Serviced_Area_10.set('fieldAliases', {'name': 'name', 'wsp': 'wsp', 'desc': 'desc', 'link': 'link', 'wwda_id': 'wwda_id', 'wwda': 'wwda', 'county_id': 'county_id', 'county': 'county', });
lyr_plot_11.set('fieldAliases', {'BLOCK_NO': 'BLOCK_NO', 'LR_NO': 'LR_NO', 'wsp': 'wsp', });
lyr_Low_Income_Area_12.set('fieldAliases', {'name': 'name', 'wsp': 'wsp', 'shape_area': 'shape_area', 'affiliated': 'affiliated', 'water_serv': 'water_serv', 'within_sa_': 'within_sa_', 'zone': 'zone', 'population': 'population', 'area type': 'area type', 'water netw': 'water netw', 'length (km': 'length (km', 'no. of con': 'no. of con', 'link_sewer': 'link_sewer', 'san_type': 'san_type', 'link_water': 'link_water', 'sup_patner': 'sup_patner', 'water_opti': 'water_opti', 'wtr_stuati': 'wtr_stuati', 'area(km2)': 'area(km2)', 'pop_dens': 'pop_dens', 'subloc': 'subloc', 'waterservi': 'waterservi', 'withinouts': 'withinouts', 'wspsremark': 'wspsremark', 'servedby': 'servedby', 'urbanizati': 'urbanizati', 'notes': 'notes', 'area': 'area', 'st_area_sh': 'st_area_sh', 'withinsabo': 'withinsabo', 'wspremarks': 'wspremarks', 'connection': 'connection', });
lyr_District_Metering_Area_13.set('fieldAliases', {'wsp': 'wsp', 'status': 'status', 'dma_name': 'dma_name', 'descriptio': 'descriptio', 'dma_id': 'dma_id', 'link': 'link', 'wwda_id': 'wwda_id', 'wwda': 'wwda', 'county_id': 'county_id', 'zone_id': 'zone_id', 'zone': 'zone', });
lyr_Licenced_Water_ServiceArea_14.set('fieldAliases', {'wsp': 'wsp', 'manager': 'manager', 'divname': 'divname', 'distname': 'distname', 'provname': 'provname', 'code_sub': 'code_sub', 'sub_name': 'sub_name', 'male': 'male', 'female': 'female', 'total': 'total', 'h_hold': 'h_hold', 'true_area': 'true_area', 'density': 'density', 'status': 'status', 'sa_name': 'sa_name', });
lyr_Sewer_Treatment_Works_0.set('fieldImages', {'name': 'TextEdit', 'comments': 'TextEdit', 'capacity': 'TextEdit', 'dsgn_capct': 'TextEdit', 'op_capcty': 'TextEdit', 'wsp': 'TextEdit', 'wwda': 'TextEdit', 'county': 'TextEdit', 'zone': 'TextEdit', 'top_elev': 'TextEdit', 'custom_t_e': 'TextEdit', 'sys_top_el': 'TextEdit', 'ymax': 'TextEdit', 'custom_yma': 'TextEdit', 'sys_ymax': 'TextEdit', 'custom_ele': 'TextEdit', 'sys_elev': 'TextEdit', 'material': 'TextEdit', 'work': 'TextEdit', 'owner': 'TextEdit', 'work_end': 'TextEdit', 'enddate': 'DateTime', 'bultdate': 'DateTime', 'state': 'TextEdit', 'function': 'TextEdit', 'type': 'TextEdit', 'wwda_id': 'TextEdit', 'county_id': 'TextEdit', 'zone_id': 'TextEdit', });
lyr_Sewer_Pipeline_1.set('fieldImages', {'wsp': 'TextEdit', 'datemapped': 'TextEdit', 'wwda': 'TextEdit', 'wwda_id': 'TextEdit', 'county': 'TextEdit', 'county_id': 'TextEdit', 'zone_id': 'TextEdit', 'zone': 'TextEdit', 'remark': 'TextEdit', 'pipe_yoc': 'TextEdit', 'node_1_id': 'TextEdit', 'node_1_typ': 'TextEdit', 'y1': 'TextEdit', 'custom_y1': 'TextEdit', 'elev1': 'TextEdit', 'cust_ele1': 'TextEdit', 'sys_elev1': 'TextEdit', 'sys_y1': 'TextEdit', 'r1': 'TextEdit', 'z1': 'TextEdit', 'node_2_id': 'TextEdit', 'node_2_typ': 'TextEdit', 'y2': 'TextEdit', 'custom_y2': 'TextEdit', 'elev2': 'TextEdit', 'cust_elev2': 'TextEdit', 'sys_elev2': 'TextEdit', 'sys_y2': 'TextEdit', 'r2': 'TextEdit', 'z2': 'TextEdit', 'slope': 'TextEdit', 'material_1': 'TextEdit', 'pipe_shape': 'TextEdit', 'state': 'TextEdit', 'gis_length': 'TextEdit', 'observ': 'TextEdit', 'work_1': 'TextEdit', 'bultdate': 'DateTime', 'enddate': 'DateTime', 'builder': 'TextEdit', 'owner_1': 'TextEdit', 'link': 'TextEdit', 'street_nam': 'TextEdit', 'verified': 'TextEdit', 'publish': 'TextEdit', 'descript': 'TextEdit', 'tstamp': 'DateTime', 'pavement': 'TextEdit', 'diameter_1': 'TextEdit', 'diam_units': 'TextEdit', 'builder_de': 'TextEdit', 'catalog': 'TextEdit', });
lyr_Sewer_Manhole_2.set('fieldImages', {'remarks': 'TextEdit', 'wwda': 'TextEdit', 'wwda_id': 'TextEdit', 'county': 'TextEdit', 'county_id': 'TextEdit', 'top_elev': 'TextEdit', 'ymax': 'TextEdit', 'type': 'TextEdit', 'material': 'TextEdit', 'wsp': 'TextEdit', 'zone': 'TextEdit', 'zone_id': 'TextEdit', 'state': 'TextEdit', 'observ': 'TextEdit', 'work': 'TextEdit', 'builder': 'TextEdit', 'built_date': 'DateTime', 'end_date': 'DateTime', 'owner': 'TextEdit', 'streetname': 'TextEdit', 'link': 'TextEdit', 'verified': 'TextEdit', 'pupblish': 'TextEdit', 'invert': 'TextEdit', 'status': 'TextEdit', 'line_name': 'TextEdit', 'dimensions': 'TextEdit', 'vulnerabil': 'TextEdit', 'maintainer': 'TextEdit', 'diameter': 'TextEdit', 'diam_unit': 'TextEdit', 'shape': 'TextEdit', 'mh_cover': 'TextEdit', 'mh_name': 'TextEdit', 'mh_cover_m': 'TextEdit', 'sys_top_e': 'TextEdit', 'sys_ymax': 'TextEdit', 'sys_elev': 'TextEdit', 'trench_dep': 'TextEdit', });
lyr_Water_Pipeline_3.set('fieldImages', {'type': 'TextEdit', 'wsp': 'TextEdit', 'label': 'TextEdit', 'status': 'TextEdit', 'zone': 'TextEdit', 'pressure_z': 'TextEdit', 'route': 'TextEdit', 'node_1_id': 'TextEdit', 'node_1': 'TextEdit', 'node_2_id': 'TextEdit', 'node_2': 'TextEdit', 'elev_1': 'TextEdit', 'deph1': 'TextEdit', 'elev_2': 'TextEdit', 'depth2': 'TextEdit', 'arccat': 'TextEdit', 'arc_type': 'TextEdit', 'material': 'TextEdit', 'wwda_id': 'TextEdit', 'wwda': 'TextEdit', 'county_id': 'TextEdit', 'county': 'TextEdit', 'zone_id': 'TextEdit', 'state': 'TextEdit', 'observ': 'TextEdit', 'gis_length': 'TextEdit', 'work': 'TextEdit', 'work_end': 'TextEdit', 'builder': 'TextEdit', 'builtdate': 'DateTime', 'enddate': 'DateTime', 'owner': 'TextEdit', 'streetname': 'TextEdit', 'desc': 'TextEdit', 'link': 'TextEdit', 'verified': 'TextEdit', 'diam': 'TextEdit', 'class': 'TextEdit', 'yearofcon': 'TextEdit', 'category': 'TextEdit', });
lyr_Reservoir_4.set('fieldImages', {'material': 'TextEdit', 'elevation': 'TextEdit', 'zone': 'TextEdit', 'type': 'TextEdit', 'wsp': 'TextEdit', 'inst_mode': 'TextEdit', 'pipe_size1': 'TextEdit', 'pipe_size2': 'TextEdit', 'instdate': 'DateTime', 'function': 'TextEdit', 'press_zone': 'TextEdit', 'height': 'TextEdit', 'state': 'TextEdit', 'capacity': 'TextEdit', 'desc': 'TextEdit', 'obsevation': 'TextEdit', 'wwda_id': 'TextEdit', 'wwda': 'TextEdit', 'county_id': 'TextEdit', 'county': 'TextEdit', 'zone_id': 'TextEdit', });
lyr_Bulk_Meters_5.set('fieldImages', {'region': 'TextEdit', 'location': 'TextEdit', 'installdat': 'DateTime', 'status': 'TextEdit', 'meter_type': 'TextEdit', 'remarks': 'TextEdit', 'conditions': 'TextEdit', 'type': 'TextEdit', 'wsp': 'TextEdit', 'material': 'TextEdit', 'state': 'TextEdit', 'serial_no': 'TextEdit', 'label': 'TextEdit', 'dma': 'TextEdit', 'outflow_dm': 'TextEdit', 'diameter': 'TextEdit', 'desc': 'TextEdit', 'inflow_dma': 'TextEdit', 'wwda_id': 'TextEdit', 'wwda': 'TextEdit', 'county_id': 'TextEdit', 'county': 'TextEdit', 'zone_id': 'TextEdit', 'zone': 'TextEdit', });
lyr_Appurtenance_6.set('fieldImages', {'material': 'TextEdit', 'wsp': 'TextEdit', 'diameter': 'TextEdit', 'type': 'TextEdit', 'label': 'TextEdit', 'location': 'TextEdit', 'elevation': 'TextEdit', 'pipe_type': 'TextEdit', 'contractor': 'TextEdit', 'status': 'TextEdit', 'zone': 'TextEdit', 'street': 'TextEdit', 'work': 'TextEdit', 'code': 'TextEdit', 'desc': 'TextEdit', 'comments': 'TextEdit', 'bult_date': 'TextEdit', 'wwda_id': 'TextEdit', 'wwda': 'TextEdit', 'county_id': 'TextEdit', 'county': 'TextEdit', 'zone_id': 'TextEdit', });
lyr_Water_Treatment_Plant_7.set('fieldImages', {'des_capcty': 'TextEdit', 'oper_capct': 'TextEdit', 'wsp': 'TextEdit', 'elev': 'TextEdit', 'depth': 'TextEdit', 'type': 'TextEdit', 'sys_type': 'TextEdit', 'material': 'TextEdit', 'wwda': 'TextEdit', 'wwda_id': 'TextEdit', 'county': 'TextEdit', 'county_id': 'TextEdit', 'zone': 'TextEdit', 'zone_id': 'TextEdit', 'state': 'TextEdit', 'observ': 'TextEdit', 'comment': 'TextEdit', 'work': 'TextEdit', 'work_end': 'TextEdit', 'builddate': 'DateTime', 'enddate': 'DateTime', 'builder': 'TextEdit', 'owner': 'TextEdit', 'streetname': 'TextEdit', 'desc': 'TextEdit', 'verified': 'TextEdit', 'name': 'TextEdit', });
lyr_Water_Source_8.set('fieldImages', {'elevation': 'TextEdit', 'depth': 'TextEdit', 'type': 'TextEdit', 'sys_type': 'TextEdit', 'nodecat_id': 'TextEdit', 'epa_type': 'TextEdit', 'observ': 'TextEdit', 'comment': 'TextEdit', 'location': 'TextEdit', 'workcat_id': 'TextEdit', 'builtdate': 'DateTime', 'enddate': 'DateTime', 'buildercat': 'TextEdit', 'streetname': 'TextEdit', 'desc': 'TextEdit', 'link': 'TextEdit', 'verified': 'TextEdit', 'label': 'TextEdit', 'publish': 'TextEdit', 'state': 'TextEdit', 'wsp': 'TextEdit', 'name': 'TextEdit', 'yield': 'TextEdit', 'power sour': 'TextEdit', 'remarks': 'TextEdit', 'dsgn_capac': 'TextEdit', 'avg_ms_day': 'TextEdit', 'descriptio': 'TextEdit', 'managedby': 'TextEdit', 'ownership': 'TextEdit', 'owner': 'TextEdit', 'wwda_id': 'TextEdit', 'wwda': 'TextEdit', 'county_id': 'TextEdit', 'county': 'TextEdit', 'zone_id': 'TextEdit', 'zone': 'TextEdit', });
lyr_Zones_9.set('fieldImages', {'wsp': 'TextEdit', 'name': 'TextEdit', 'desc': 'TextEdit', 'link': 'TextEdit', 'wwda_id': 'TextEdit', 'wwda': 'TextEdit', 'county_id': 'TextEdit', 'county': 'TextEdit', });
lyr_Actual_Serviced_Area_10.set('fieldImages', {'name': 'TextEdit', 'wsp': 'TextEdit', 'desc': 'TextEdit', 'link': 'TextEdit', 'wwda_id': 'TextEdit', 'wwda': 'TextEdit', 'county_id': 'TextEdit', 'county': 'TextEdit', });
lyr_plot_11.set('fieldImages', {'BLOCK_NO': 'TextEdit', 'LR_NO': 'TextEdit', 'wsp': 'TextEdit', });
lyr_Low_Income_Area_12.set('fieldImages', {'name': 'TextEdit', 'wsp': 'TextEdit', 'shape_area': 'TextEdit', 'affiliated': 'TextEdit', 'water_serv': 'TextEdit', 'within_sa_': 'TextEdit', 'zone': 'TextEdit', 'population': 'TextEdit', 'area type': 'TextEdit', 'water netw': 'TextEdit', 'length (km': 'TextEdit', 'no. of con': 'TextEdit', 'link_sewer': 'TextEdit', 'san_type': 'TextEdit', 'link_water': 'TextEdit', 'sup_patner': 'TextEdit', 'water_opti': 'TextEdit', 'wtr_stuati': 'TextEdit', 'area(km2)': 'TextEdit', 'pop_dens': 'TextEdit', 'subloc': 'TextEdit', 'waterservi': 'TextEdit', 'withinouts': 'TextEdit', 'wspsremark': 'TextEdit', 'servedby': 'TextEdit', 'urbanizati': 'TextEdit', 'notes': 'TextEdit', 'area': 'TextEdit', 'st_area_sh': 'TextEdit', 'withinsabo': 'TextEdit', 'wspremarks': 'TextEdit', 'connection': 'TextEdit', });
lyr_District_Metering_Area_13.set('fieldImages', {'wsp': 'TextEdit', 'status': 'TextEdit', 'dma_name': 'TextEdit', 'descriptio': 'TextEdit', 'dma_id': 'TextEdit', 'link': 'TextEdit', 'wwda_id': 'TextEdit', 'wwda': 'TextEdit', 'county_id': 'TextEdit', 'zone_id': 'TextEdit', 'zone': 'TextEdit', });
lyr_Licenced_Water_ServiceArea_14.set('fieldImages', {'wsp': 'TextEdit', 'manager': 'TextEdit', 'divname': 'TextEdit', 'distname': 'TextEdit', 'provname': 'TextEdit', 'code_sub': 'TextEdit', 'sub_name': 'TextEdit', 'male': 'TextEdit', 'female': 'TextEdit', 'total': 'TextEdit', 'h_hold': 'TextEdit', 'true_area': 'TextEdit', 'density': 'TextEdit', 'status': 'TextEdit', 'sa_name': 'TextEdit', });
lyr_Sewer_Treatment_Works_0.set('fieldLabels', {'name': 'inline label', 'comments': 'no label', 'capacity': 'inline label', 'dsgn_capct': 'no label', 'op_capcty': 'no label', 'wsp': 'no label', 'wwda': 'no label', 'county': 'no label', 'zone': 'no label', 'top_elev': 'no label', 'custom_t_e': 'no label', 'sys_top_el': 'no label', 'ymax': 'no label', 'custom_yma': 'no label', 'sys_ymax': 'no label', 'custom_ele': 'no label', 'sys_elev': 'no label', 'material': 'no label', 'work': 'inline label', 'owner': 'no label', 'work_end': 'no label', 'enddate': 'no label', 'bultdate': 'no label', 'state': 'no label', 'function': 'no label', 'type': 'no label', 'wwda_id': 'no label', 'county_id': 'no label', 'zone_id': 'no label', });
lyr_Sewer_Pipeline_1.set('fieldLabels', {'wsp': 'no label', 'datemapped': 'no label', 'wwda': 'no label', 'wwda_id': 'no label', 'county': 'no label', 'county_id': 'no label', 'zone_id': 'no label', 'zone': 'no label', 'remark': 'no label', 'pipe_yoc': 'no label', 'node_1_id': 'no label', 'node_1_typ': 'no label', 'y1': 'no label', 'custom_y1': 'no label', 'elev1': 'no label', 'cust_ele1': 'no label', 'sys_elev1': 'no label', 'sys_y1': 'no label', 'r1': 'no label', 'z1': 'no label', 'node_2_id': 'no label', 'node_2_typ': 'no label', 'y2': 'no label', 'custom_y2': 'no label', 'elev2': 'no label', 'cust_elev2': 'no label', 'sys_elev2': 'no label', 'sys_y2': 'no label', 'r2': 'no label', 'z2': 'no label', 'slope': 'no label', 'material_1': 'no label', 'pipe_shape': 'no label', 'state': 'no label', 'gis_length': 'no label', 'observ': 'no label', 'work_1': 'no label', 'bultdate': 'no label', 'enddate': 'no label', 'builder': 'no label', 'owner_1': 'no label', 'link': 'no label', 'street_nam': 'no label', 'verified': 'no label', 'publish': 'no label', 'descript': 'no label', 'tstamp': 'no label', 'pavement': 'no label', 'diameter_1': 'inline label', 'diam_units': 'no label', 'builder_de': 'no label', 'catalog': 'no label', });
lyr_Sewer_Manhole_2.set('fieldLabels', {'remarks': 'no label', 'wwda': 'no label', 'wwda_id': 'no label', 'county': 'no label', 'county_id': 'no label', 'top_elev': 'no label', 'ymax': 'no label', 'type': 'no label', 'material': 'inline label', 'wsp': 'no label', 'zone': 'no label', 'zone_id': 'no label', 'state': 'no label', 'observ': 'no label', 'work': 'no label', 'builder': 'no label', 'built_date': 'no label', 'end_date': 'no label', 'owner': 'no label', 'streetname': 'no label', 'link': 'no label', 'verified': 'no label', 'pupblish': 'no label', 'invert': 'no label', 'status': 'no label', 'line_name': 'no label', 'dimensions': 'no label', 'vulnerabil': 'no label', 'maintainer': 'no label', 'diameter': 'inline label', 'diam_unit': 'no label', 'shape': 'no label', 'mh_cover': 'no label', 'mh_name': 'no label', 'mh_cover_m': 'no label', 'sys_top_e': 'no label', 'sys_ymax': 'no label', 'sys_elev': 'no label', 'trench_dep': 'no label', });
lyr_Water_Pipeline_3.set('fieldLabels', {'type': 'inline label', 'wsp': 'no label', 'label': 'no label', 'status': 'no label', 'zone': 'no label', 'pressure_z': 'no label', 'route': 'no label', 'node_1_id': 'no label', 'node_1': 'no label', 'node_2_id': 'no label', 'node_2': 'no label', 'elev_1': 'no label', 'deph1': 'no label', 'elev_2': 'no label', 'depth2': 'no label', 'arccat': 'no label', 'arc_type': 'no label', 'material': 'inline label', 'wwda_id': 'no label', 'wwda': 'no label', 'county_id': 'no label', 'county': 'no label', 'zone_id': 'no label', 'state': 'no label', 'observ': 'no label', 'gis_length': 'no label', 'work': 'no label', 'work_end': 'no label', 'builder': 'no label', 'builtdate': 'no label', 'enddate': 'no label', 'owner': 'no label', 'streetname': 'no label', 'desc': 'no label', 'link': 'no label', 'verified': 'no label', 'diam': 'inline label', 'class': 'no label', 'yearofcon': 'no label', 'category': 'no label', });
lyr_Reservoir_4.set('fieldLabels', {'material': 'inline label', 'elevation': 'no label', 'zone': 'inline label', 'type': 'inline label', 'wsp': 'no label', 'inst_mode': 'inline label', 'pipe_size1': 'no label', 'pipe_size2': 'no label', 'instdate': 'no label', 'function': 'no label', 'press_zone': 'no label', 'height': 'no label', 'state': 'no label', 'capacity': 'no label', 'desc': 'no label', 'obsevation': 'no label', 'wwda_id': 'no label', 'wwda': 'no label', 'county_id': 'no label', 'county': 'no label', 'zone_id': 'no label', });
lyr_Bulk_Meters_5.set('fieldLabels', {'region': 'no label', 'location': 'no label', 'installdat': 'no label', 'status': 'no label', 'meter_type': 'no label', 'remarks': 'no label', 'conditions': 'no label', 'type': 'no label', 'wsp': 'no label', 'material': 'no label', 'state': 'no label', 'serial_no': 'no label', 'label': 'no label', 'dma': 'no label', 'outflow_dm': 'no label', 'diameter': 'no label', 'desc': 'no label', 'inflow_dma': 'no label', 'wwda_id': 'no label', 'wwda': 'no label', 'county_id': 'no label', 'county': 'no label', 'zone_id': 'no label', 'zone': 'no label', });
lyr_Appurtenance_6.set('fieldLabels', {'material': 'inline label', 'wsp': 'inline label', 'diameter': 'inline label', 'type': 'inline label', 'label': 'no label', 'location': 'no label', 'elevation': 'no label', 'pipe_type': 'no label', 'contractor': 'no label', 'status': 'no label', 'zone': 'no label', 'street': 'no label', 'work': 'no label', 'code': 'no label', 'desc': 'no label', 'comments': 'no label', 'bult_date': 'no label', 'wwda_id': 'no label', 'wwda': 'no label', 'county_id': 'no label', 'county': 'no label', 'zone_id': 'no label', });
lyr_Water_Treatment_Plant_7.set('fieldLabels', {'des_capcty': 'no label', 'oper_capct': 'no label', 'wsp': 'no label', 'elev': 'no label', 'depth': 'no label', 'type': 'no label', 'sys_type': 'no label', 'material': 'no label', 'wwda': 'no label', 'wwda_id': 'no label', 'county': 'no label', 'county_id': 'no label', 'zone': 'no label', 'zone_id': 'no label', 'state': 'no label', 'observ': 'no label', 'comment': 'no label', 'work': 'no label', 'work_end': 'no label', 'builddate': 'no label', 'enddate': 'no label', 'builder': 'no label', 'owner': 'no label', 'streetname': 'no label', 'desc': 'no label', 'verified': 'no label', 'name': 'no label', });
lyr_Water_Source_8.set('fieldLabels', {'elevation': 'no label', 'depth': 'no label', 'type': 'no label', 'sys_type': 'no label', 'nodecat_id': 'no label', 'epa_type': 'no label', 'observ': 'no label', 'comment': 'no label', 'location': 'no label', 'workcat_id': 'no label', 'builtdate': 'no label', 'enddate': 'no label', 'buildercat': 'no label', 'streetname': 'no label', 'desc': 'no label', 'link': 'no label', 'verified': 'no label', 'label': 'no label', 'publish': 'no label', 'state': 'no label', 'wsp': 'no label', 'name': 'no label', 'yield': 'no label', 'power sour': 'no label', 'remarks': 'no label', 'dsgn_capac': 'no label', 'avg_ms_day': 'no label', 'descriptio': 'no label', 'managedby': 'no label', 'ownership': 'no label', 'owner': 'no label', 'wwda_id': 'no label', 'wwda': 'no label', 'county_id': 'no label', 'county': 'no label', 'zone_id': 'no label', 'zone': 'no label', });
lyr_Zones_9.set('fieldLabels', {'wsp': 'no label', 'name': 'no label', 'desc': 'no label', 'link': 'no label', 'wwda_id': 'no label', 'wwda': 'no label', 'county_id': 'no label', 'county': 'no label', });
lyr_Actual_Serviced_Area_10.set('fieldLabels', {'name': 'inline label', 'wsp': 'no label', 'desc': 'no label', 'link': 'no label', 'wwda_id': 'no label', 'wwda': 'no label', 'county_id': 'no label', 'county': 'no label', });
lyr_plot_11.set('fieldLabels', {'BLOCK_NO': 'no label', 'LR_NO': 'no label', 'wsp': 'no label', });
lyr_Low_Income_Area_12.set('fieldLabels', {'name': 'inline label', 'wsp': 'no label', 'shape_area': 'no label', 'affiliated': 'no label', 'water_serv': 'no label', 'within_sa_': 'no label', 'zone': 'no label', 'population': 'no label', 'area type': 'no label', 'water netw': 'no label', 'length (km': 'no label', 'no. of con': 'no label', 'link_sewer': 'no label', 'san_type': 'no label', 'link_water': 'no label', 'sup_patner': 'no label', 'water_opti': 'no label', 'wtr_stuati': 'no label', 'area(km2)': 'no label', 'pop_dens': 'no label', 'subloc': 'no label', 'waterservi': 'no label', 'withinouts': 'no label', 'wspsremark': 'no label', 'servedby': 'no label', 'urbanizati': 'no label', 'notes': 'no label', 'area': 'no label', 'st_area_sh': 'no label', 'withinsabo': 'no label', 'wspremarks': 'no label', 'connection': 'no label', });
lyr_District_Metering_Area_13.set('fieldLabels', {'wsp': 'no label', 'status': 'no label', 'dma_name': 'header label', 'descriptio': 'no label', 'dma_id': 'no label', 'link': 'no label', 'wwda_id': 'no label', 'wwda': 'no label', 'county_id': 'no label', 'zone_id': 'no label', 'zone': 'no label', });
lyr_Licenced_Water_ServiceArea_14.set('fieldLabels', {'wsp': 'header label', 'manager': 'no label', 'divname': 'no label', 'distname': 'no label', 'provname': 'no label', 'code_sub': 'no label', 'sub_name': 'no label', 'male': 'no label', 'female': 'no label', 'total': 'no label', 'h_hold': 'no label', 'true_area': 'no label', 'density': 'no label', 'status': 'no label', 'sa_name': 'no label', });
lyr_Licenced_Water_ServiceArea_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});