var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_HeartDiseasePrevalenceRate_1 = new ol.format.GeoJSON();
var features_HeartDiseasePrevalenceRate_1 = format_HeartDiseasePrevalenceRate_1.readFeatures(json_HeartDiseasePrevalenceRate_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeartDiseasePrevalenceRate_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeartDiseasePrevalenceRate_1.addFeatures(features_HeartDiseasePrevalenceRate_1);
var lyr_HeartDiseasePrevalenceRate_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HeartDiseasePrevalenceRate_1, 
                style: style_HeartDiseasePrevalenceRate_1,
                interactive: true,
    title: 'Heart Disease Prevalence Rate<br />\
    <img src="styles/legend/HeartDiseasePrevalenceRate_1_0.png" /> 0.8% - 3.48%<br />\
    <img src="styles/legend/HeartDiseasePrevalenceRate_1_1.png" /> 3.48% - 4.1%<br />\
    <img src="styles/legend/HeartDiseasePrevalenceRate_1_2.png" /> 4.1% - 4.6%<br />\
    <img src="styles/legend/HeartDiseasePrevalenceRate_1_3.png" /> 4.6% - 5.03%<br />\
    <img src="styles/legend/HeartDiseasePrevalenceRate_1_4.png" /> 5.03% - 5.6%<br />\
    <img src="styles/legend/HeartDiseasePrevalenceRate_1_5.png" /> 5.6% - 11.2%<br />'
        });
var format_CancerPrevalenceRateexecludingskin_2 = new ol.format.GeoJSON();
var features_CancerPrevalenceRateexecludingskin_2 = format_CancerPrevalenceRateexecludingskin_2.readFeatures(json_CancerPrevalenceRateexecludingskin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CancerPrevalenceRateexecludingskin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CancerPrevalenceRateexecludingskin_2.addFeatures(features_CancerPrevalenceRateexecludingskin_2);
var lyr_CancerPrevalenceRateexecludingskin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CancerPrevalenceRateexecludingskin_2, 
                style: style_CancerPrevalenceRateexecludingskin_2,
                interactive: true,
    title: 'Cancer Prevalence Rate (execluding skin)<br />\
    <img src="styles/legend/CancerPrevalenceRateexecludingskin_2_0.png" /> 0.6% - 4.1%<br />\
    <img src="styles/legend/CancerPrevalenceRateexecludingskin_2_1.png" /> 4.1% - 4.8%<br />\
    <img src="styles/legend/CancerPrevalenceRateexecludingskin_2_2.png" /> 4.8% - 5.5%<br />\
    <img src="styles/legend/CancerPrevalenceRateexecludingskin_2_3.png" /> 5.5% - 6.2%<br />\
    <img src="styles/legend/CancerPrevalenceRateexecludingskin_2_4.png" /> 6.2% - 7.32%<br />\
    <img src="styles/legend/CancerPrevalenceRateexecludingskin_2_5.png" /> 7.32% - 16.9%<br />'
        });
var format_DiabetesPrevalenceRate_3 = new ol.format.GeoJSON();
var features_DiabetesPrevalenceRate_3 = format_DiabetesPrevalenceRate_3.readFeatures(json_DiabetesPrevalenceRate_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiabetesPrevalenceRate_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiabetesPrevalenceRate_3.addFeatures(features_DiabetesPrevalenceRate_3);
var lyr_DiabetesPrevalenceRate_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DiabetesPrevalenceRate_3, 
                style: style_DiabetesPrevalenceRate_3,
                interactive: true,
    title: 'Diabetes Prevalence Rate<br />\
    <img src="styles/legend/DiabetesPrevalenceRate_3_0.png" /> 1.2% - 6.48%<br />\
    <img src="styles/legend/DiabetesPrevalenceRate_3_1.png" /> 6.48% - 7.7%<br />\
    <img src="styles/legend/DiabetesPrevalenceRate_3_2.png" /> 7.7% - 8.4%<br />\
    <img src="styles/legend/DiabetesPrevalenceRate_3_3.png" /> 8.4% - 9.5%<br />\
    <img src="styles/legend/DiabetesPrevalenceRate_3_4.png" /> 9.5% - 11.02%<br />\
    <img src="styles/legend/DiabetesPrevalenceRate_3_5.png" /> 11.02% - 18.3%<br />'
        });
var format_COPDPrevalenceRate_4 = new ol.format.GeoJSON();
var features_COPDPrevalenceRate_4 = format_COPDPrevalenceRate_4.readFeatures(json_COPDPrevalenceRate_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COPDPrevalenceRate_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COPDPrevalenceRate_4.addFeatures(features_COPDPrevalenceRate_4);
var lyr_COPDPrevalenceRate_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COPDPrevalenceRate_4, 
                style: style_COPDPrevalenceRate_4,
                interactive: true,
    title: 'COPD Prevalence Rate<br />\
    <img src="styles/legend/COPDPrevalenceRate_4_0.png" /> 1.5% - 3.7%<br />\
    <img src="styles/legend/COPDPrevalenceRate_4_1.png" /> 3.7% - 4.5%<br />\
    <img src="styles/legend/COPDPrevalenceRate_4_2.png" /> 4.5% - 5%<br />\
    <img src="styles/legend/COPDPrevalenceRate_4_3.png" /> 5% - 5.5%<br />\
    <img src="styles/legend/COPDPrevalenceRate_4_4.png" /> 5.5% - 6.1%<br />\
    <img src="styles/legend/COPDPrevalenceRate_4_5.png" /> 6.1% - 10.6%<br />'
        });
var format_AsthmaPrevalenceRate_5 = new ol.format.GeoJSON();
var features_AsthmaPrevalenceRate_5 = format_AsthmaPrevalenceRate_5.readFeatures(json_AsthmaPrevalenceRate_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AsthmaPrevalenceRate_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AsthmaPrevalenceRate_5.addFeatures(features_AsthmaPrevalenceRate_5);
var lyr_AsthmaPrevalenceRate_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AsthmaPrevalenceRate_5, 
                style: style_AsthmaPrevalenceRate_5,
                interactive: true,
    title: 'Asthma Prevalence Rate<br />\
    <img src="styles/legend/AsthmaPrevalenceRate_5_0.png" /> 6.3% - 7.6%<br />\
    <img src="styles/legend/AsthmaPrevalenceRate_5_1.png" /> 7.6% - 8%<br />\
    <img src="styles/legend/AsthmaPrevalenceRate_5_2.png" /> 8% - 8.3%<br />\
    <img src="styles/legend/AsthmaPrevalenceRate_5_3.png" /> 8.3% - 8.7%<br />\
    <img src="styles/legend/AsthmaPrevalenceRate_5_4.png" /> 8.7% - 9.1%<br />\
    <img src="styles/legend/AsthmaPrevalenceRate_5_5.png" /> 9.1% - 11.4%<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_HeartDiseasePrevalenceRate_1.setVisible(true);lyr_CancerPrevalenceRateexecludingskin_2.setVisible(true);lyr_DiabetesPrevalenceRate_3.setVisible(true);lyr_COPDPrevalenceRate_4.setVisible(true);lyr_AsthmaPrevalenceRate_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_HeartDiseasePrevalenceRate_1,lyr_CancerPrevalenceRateexecludingskin_2,lyr_DiabetesPrevalenceRate_3,lyr_COPDPrevalenceRate_4,lyr_AsthmaPrevalenceRate_5];
lyr_HeartDiseasePrevalenceRate_1.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'year': 'year', 'stateabbr': 'stateabbr', 'statedesc': 'statedesc', 'countyname': 'countyname', 'countyfips': 'countyfips', 'locationna': 'locationna', 'datasource': 'datasource', 'category': 'category', 'measure': 'measure', 'data_value': 'data_value', 'data_val_1': 'data_val_1', 'HeartDRate': 'HeartDRate', 'data_val_2': 'data_val_2', 'data_val_3': 'data_val_3', 'low_confid': 'low_confid', 'totalpopul': 'totalpopul', 'geolocatio': 'geolocatio', 'locationid': 'locationid', 'categoryid': 'categoryid', 'measureid': 'measureid', 'datavaluet': 'datavaluet', 'short_ques': 'short_ques', 'AsthmaRate': 'AsthmaRate', 'COPD_Rate': 'COPD_Rate', 'CancerRate': 'CancerRate', 'DiabetesRa': 'DiabetesRa', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', 'Asthma': 'Asthma', 'COPD': 'COPD', 'Cancer': 'Cancer', 'Diabetes': 'Diabetes', 'Heart': 'Heart', });
lyr_CancerPrevalenceRateexecludingskin_2.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'year': 'year', 'stateabbr': 'stateabbr', 'statedesc': 'statedesc', 'countyname': 'countyname', 'countyfips': 'countyfips', 'locationna': 'locationna', 'datasource': 'datasource', 'category': 'category', 'measure': 'measure', 'data_value': 'data_value', 'data_val_1': 'data_val_1', 'HeartDRate': 'HeartDRate', 'data_val_2': 'data_val_2', 'data_val_3': 'data_val_3', 'low_confid': 'low_confid', 'totalpopul': 'totalpopul', 'geolocatio': 'geolocatio', 'locationid': 'locationid', 'categoryid': 'categoryid', 'measureid': 'measureid', 'datavaluet': 'datavaluet', 'short_ques': 'short_ques', 'AsthmaRate': 'AsthmaRate', 'COPD_Rate': 'COPD_Rate', 'CancerRate': 'CancerRate', 'DiabetesRa': 'DiabetesRa', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', 'Asthma': 'Asthma', 'COPD': 'COPD', 'Cancer': 'Cancer', 'Diabetes': 'Diabetes', 'Heart': 'Heart', });
lyr_DiabetesPrevalenceRate_3.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'year': 'year', 'stateabbr': 'stateabbr', 'statedesc': 'statedesc', 'countyname': 'countyname', 'countyfips': 'countyfips', 'locationna': 'locationna', 'datasource': 'datasource', 'category': 'category', 'measure': 'measure', 'data_value': 'data_value', 'data_val_1': 'data_val_1', 'HeartDRate': 'HeartDRate', 'data_val_2': 'data_val_2', 'data_val_3': 'data_val_3', 'low_confid': 'low_confid', 'totalpopul': 'totalpopul', 'geolocatio': 'geolocatio', 'locationid': 'locationid', 'categoryid': 'categoryid', 'measureid': 'measureid', 'datavaluet': 'datavaluet', 'short_ques': 'short_ques', 'AsthmaRate': 'AsthmaRate', 'COPD_Rate': 'COPD_Rate', 'CancerRate': 'CancerRate', 'DiabetesRa': 'DiabetesRa', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', 'Asthma': 'Asthma', 'COPD': 'COPD', 'Cancer': 'Cancer', 'Diabetes': 'Diabetes', 'Heart': 'Heart', });
lyr_COPDPrevalenceRate_4.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'year': 'year', 'stateabbr': 'stateabbr', 'statedesc': 'statedesc', 'countyname': 'countyname', 'countyfips': 'countyfips', 'locationna': 'locationna', 'datasource': 'datasource', 'category': 'category', 'measure': 'measure', 'data_value': 'data_value', 'data_val_1': 'data_val_1', 'HeartDRate': 'HeartDRate', 'data_val_2': 'data_val_2', 'data_val_3': 'data_val_3', 'low_confid': 'low_confid', 'totalpopul': 'totalpopul', 'geolocatio': 'geolocatio', 'locationid': 'locationid', 'categoryid': 'categoryid', 'measureid': 'measureid', 'datavaluet': 'datavaluet', 'short_ques': 'short_ques', 'AsthmaRate': 'AsthmaRate', 'COPD_Rate': 'COPD_Rate', 'CancerRate': 'CancerRate', 'DiabetesRa': 'DiabetesRa', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', 'Asthma': 'Asthma', 'COPD': 'COPD Prevalence Rate', 'Cancer': 'Cancer', 'Diabetes': 'Diabetes', 'Heart': 'Heart', });
lyr_AsthmaPrevalenceRate_5.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'year': 'year', 'stateabbr': 'stateabbr', 'statedesc': 'statedesc', 'countyname': 'countyname', 'countyfips': 'countyfips', 'locationna': 'locationna', 'datasource': 'datasource', 'category': 'category', 'measure': 'measure', 'data_value': 'data_value', 'data_val_1': 'data_val_1', 'HeartDRate': 'HeartDRate', 'data_val_2': 'data_val_2', 'data_val_3': 'data_val_3', 'low_confid': 'low_confid', 'totalpopul': 'totalpopul', 'geolocatio': 'geolocatio', 'locationid': 'locationid', 'categoryid': 'categoryid', 'measureid': 'measureid', 'datavaluet': 'datavaluet', 'short_ques': 'short_ques', 'AsthmaRate': 'AsthmaRate', 'COPD_Rate': 'COPD_Rate', 'CancerRate': 'CancerRate', 'DiabetesRa': 'DiabetesRa', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', 'Asthma': 'Asthma', 'COPD': 'COPD', 'Cancer': 'Cancer', 'Diabetes': 'Diabetes', 'Heart': 'Heart', });
lyr_HeartDiseasePrevalenceRate_1.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'year': 'Hidden', 'stateabbr': 'Hidden', 'statedesc': 'Hidden', 'countyname': 'Hidden', 'countyfips': 'Hidden', 'locationna': 'Hidden', 'datasource': 'Hidden', 'category': 'Hidden', 'measure': 'Hidden', 'data_value': 'Hidden', 'data_val_1': 'Hidden', 'HeartDRate': 'Hidden', 'data_val_2': 'Hidden', 'data_val_3': 'Hidden', 'low_confid': 'Hidden', 'totalpopul': 'Hidden', 'geolocatio': 'Hidden', 'locationid': 'Hidden', 'categoryid': 'Hidden', 'measureid': 'Hidden', 'datavaluet': 'Hidden', 'short_ques': 'Hidden', 'AsthmaRate': 'Hidden', 'COPD_Rate': 'Hidden', 'CancerRate': 'Hidden', 'DiabetesRa': 'Hidden', 'n': 'Hidden', 'distance': 'Hidden', 'feature_x': 'Hidden', 'feature_y': 'Hidden', 'nearest_x': 'Hidden', 'nearest_y': 'Hidden', 'Asthma': 'Hidden', 'COPD': 'Hidden', 'Cancer': 'Hidden', 'Diabetes': 'Hidden', 'Heart': 'TextEdit', });
lyr_CancerPrevalenceRateexecludingskin_2.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'year': 'Hidden', 'stateabbr': 'Hidden', 'statedesc': 'Hidden', 'countyname': 'Hidden', 'countyfips': 'Hidden', 'locationna': 'Hidden', 'datasource': 'Hidden', 'category': 'Hidden', 'measure': 'Hidden', 'data_value': 'Hidden', 'data_val_1': 'Hidden', 'HeartDRate': 'Hidden', 'data_val_2': 'Hidden', 'data_val_3': 'Hidden', 'low_confid': 'Hidden', 'totalpopul': 'Hidden', 'geolocatio': 'Hidden', 'locationid': 'Hidden', 'categoryid': 'Hidden', 'measureid': 'Hidden', 'datavaluet': 'Hidden', 'short_ques': 'Hidden', 'AsthmaRate': 'Hidden', 'COPD_Rate': 'Hidden', 'CancerRate': 'Hidden', 'DiabetesRa': 'Hidden', 'n': 'Hidden', 'distance': 'Hidden', 'feature_x': 'Hidden', 'feature_y': 'Hidden', 'nearest_x': 'Hidden', 'nearest_y': 'Hidden', 'Asthma': 'Hidden', 'COPD': 'Hidden', 'Cancer': 'TextEdit', 'Diabetes': 'Hidden', 'Heart': 'Hidden', });
lyr_DiabetesPrevalenceRate_3.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'year': 'Hidden', 'stateabbr': 'Hidden', 'statedesc': 'Hidden', 'countyname': 'Hidden', 'countyfips': 'Hidden', 'locationna': 'Hidden', 'datasource': 'Hidden', 'category': 'Hidden', 'measure': 'Hidden', 'data_value': 'Hidden', 'data_val_1': 'Hidden', 'HeartDRate': 'Hidden', 'data_val_2': 'Hidden', 'data_val_3': 'Hidden', 'low_confid': 'Hidden', 'totalpopul': 'Hidden', 'geolocatio': 'Hidden', 'locationid': 'Hidden', 'categoryid': 'Hidden', 'measureid': 'Hidden', 'datavaluet': 'Hidden', 'short_ques': 'Hidden', 'AsthmaRate': 'Hidden', 'COPD_Rate': 'Hidden', 'CancerRate': 'Hidden', 'DiabetesRa': 'Hidden', 'n': 'Hidden', 'distance': 'Hidden', 'feature_x': 'Hidden', 'feature_y': 'Hidden', 'nearest_x': 'Hidden', 'nearest_y': 'Hidden', 'Asthma': 'Hidden', 'COPD': 'Hidden', 'Cancer': 'Hidden', 'Diabetes': 'TextEdit', 'Heart': 'Hidden', });
lyr_COPDPrevalenceRate_4.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'year': 'Hidden', 'stateabbr': 'Hidden', 'statedesc': 'Hidden', 'countyname': 'Hidden', 'countyfips': 'Hidden', 'locationna': 'Hidden', 'datasource': 'Hidden', 'category': 'Hidden', 'measure': 'Hidden', 'data_value': 'Hidden', 'data_val_1': 'Hidden', 'HeartDRate': 'Hidden', 'data_val_2': 'Hidden', 'data_val_3': 'Hidden', 'low_confid': 'Hidden', 'totalpopul': 'Hidden', 'geolocatio': 'Hidden', 'locationid': 'Hidden', 'categoryid': 'Hidden', 'measureid': 'Hidden', 'datavaluet': 'Hidden', 'short_ques': 'Hidden', 'AsthmaRate': 'Hidden', 'COPD_Rate': 'Hidden', 'CancerRate': 'Hidden', 'DiabetesRa': 'Hidden', 'n': 'Hidden', 'distance': 'Hidden', 'feature_x': 'Hidden', 'feature_y': 'Hidden', 'nearest_x': 'Hidden', 'nearest_y': 'Hidden', 'Asthma': 'Hidden', 'COPD': 'TextEdit', 'Cancer': 'Hidden', 'Diabetes': 'Hidden', 'Heart': 'Hidden', });
lyr_AsthmaPrevalenceRate_5.set('fieldImages', {'fid': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'year': 'Hidden', 'stateabbr': 'Hidden', 'statedesc': 'Hidden', 'countyname': 'Hidden', 'countyfips': 'Hidden', 'locationna': 'Hidden', 'datasource': 'Hidden', 'category': 'Hidden', 'measure': 'Hidden', 'data_value': 'Hidden', 'data_val_1': 'Hidden', 'HeartDRate': 'Hidden', 'data_val_2': 'Hidden', 'data_val_3': 'Hidden', 'low_confid': 'Hidden', 'totalpopul': 'Hidden', 'geolocatio': 'Hidden', 'locationid': 'Hidden', 'categoryid': 'Hidden', 'measureid': 'Hidden', 'datavaluet': 'Hidden', 'short_ques': 'Hidden', 'AsthmaRate': 'Hidden', 'COPD_Rate': 'Hidden', 'CancerRate': 'Hidden', 'DiabetesRa': 'Hidden', 'n': 'Hidden', 'distance': 'Hidden', 'feature_x': 'Hidden', 'feature_y': 'Hidden', 'nearest_x': 'Hidden', 'nearest_y': 'Hidden', 'Asthma': 'TextEdit', 'COPD': 'Hidden', 'Cancer': 'Hidden', 'Diabetes': 'Hidden', 'Heart': 'Hidden', });
lyr_HeartDiseasePrevalenceRate_1.set('fieldLabels', {'Heart': 'inline label', });
lyr_CancerPrevalenceRateexecludingskin_2.set('fieldLabels', {'Cancer': 'inline label', });
lyr_DiabetesPrevalenceRate_3.set('fieldLabels', {'Diabetes': 'inline label', });
lyr_COPDPrevalenceRate_4.set('fieldLabels', {'COPD': 'inline label', });
lyr_AsthmaPrevalenceRate_5.set('fieldLabels', {'Asthma': 'inline label', });
lyr_AsthmaPrevalenceRate_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});