var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_KelPasirkaliki_1 = new ol.format.GeoJSON();
var features_KelPasirkaliki_1 = format_KelPasirkaliki_1.readFeatures(json_KelPasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelPasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelPasirkaliki_1.addFeatures(features_KelPasirkaliki_1);
var lyr_KelPasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelPasirkaliki_1, 
                style: style_KelPasirkaliki_1,
                popuplayertitle: "Kel. Pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/KelPasirkaliki_1.png" /> Kel. Pasirkaliki'
            });
var format_TitikJentik_2 = new ol.format.GeoJSON();
var features_TitikJentik_2 = format_TitikJentik_2.readFeatures(json_TitikJentik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikJentik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikJentik_2.addFeatures(features_TitikJentik_2);
var lyr_TitikJentik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikJentik_2, 
                style: style_TitikJentik_2,
                popuplayertitle: "Titik Jentik",
                interactive: true,
                title: '<img src="styles/legend/TitikJentik_2.png" /> Titik Jentik'
            });
var format_KawasanJentik_3 = new ol.format.GeoJSON();
var features_KawasanJentik_3 = format_KawasanJentik_3.readFeatures(json_KawasanJentik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanJentik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanJentik_3.addFeatures(features_KawasanJentik_3);
var lyr_KawasanJentik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanJentik_3, 
                style: style_KawasanJentik_3,
                popuplayertitle: "Kawasan Jentik",
                interactive: true,
                title: '<img src="styles/legend/KawasanJentik_3.png" /> Kawasan Jentik'
            });
var format_Jalan_4 = new ol.format.GeoJSON();
var features_Jalan_4 = format_Jalan_4.readFeatures(json_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_4.addFeatures(features_Jalan_4);
var lyr_Jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_4, 
                style: style_Jalan_4,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_4.png" /> Jalan'
            });
var format_Sungai_5 = new ol.format.GeoJSON();
var features_Sungai_5 = format_Sungai_5.readFeatures(json_Sungai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_5.addFeatures(features_Sungai_5);
var lyr_Sungai_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_5, 
                style: style_Sungai_5,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_5.png" /> Sungai'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_KelPasirkaliki_1.setVisible(true);lyr_TitikJentik_2.setVisible(true);lyr_KawasanJentik_3.setVisible(true);lyr_Jalan_4.setVisible(true);lyr_Sungai_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_KelPasirkaliki_1,lyr_TitikJentik_2,lyr_KawasanJentik_3,lyr_Jalan_4,lyr_Sungai_5];
lyr_KelPasirkaliki_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_TitikJentik_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_KawasanJentik_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_Jalan_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Sungai_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KelPasirkaliki_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_TitikJentik_2.set('fieldImages', {'fid': '', 'Name': '', 'description': '', });
lyr_KawasanJentik_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_Jalan_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Sungai_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_KelPasirkaliki_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_TitikJentik_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_KawasanJentik_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', });
lyr_Jalan_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Sungai_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Sungai_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});