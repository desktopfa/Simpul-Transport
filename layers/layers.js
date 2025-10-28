var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Simpul_1 = new ol.format.GeoJSON();
var features_Simpul_1 = format_Simpul_1.readFeatures(json_Simpul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Simpul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Simpul_1.addFeatures(features_Simpul_1);
var lyr_Simpul_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Simpul_1, 
                style: style_Simpul_1,
                popuplayertitle: 'Simpul',
                interactive: true,
    title: 'Simpul<br />\
    <img src="styles/legend/Simpul_1_0.png" /> Bandara<br />\
    <img src="styles/legend/Simpul_1_1.png" /> Pelabuhan<br />\
    <img src="styles/legend/Simpul_1_2.png" /> Stasiun<br />\
    <img src="styles/legend/Simpul_1_3.png" /> Terminal<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Simpul_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Simpul_1];
lyr_Simpul_1.set('fieldAliases', {'NO': 'NO', 'SIMPUL': 'SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABUPATEN_': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI_T': 'KATEGORI', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS': 'STATUS', 'LUAS_LAHAN': 'LUAS_LAHAN', 'LUAS_BANGU': 'LUAS_BANGUNAN', 'KAP_SIMPUL': 'KAP_SIMPUL', 'KAP_PNP_HA': 'KAP_PNP_HA', 'PENGELOLA': 'PENGELOLA', 'KANTOR_OTO': 'KTR_OTORITAS', 'KETERSEDIA': 'PARK&RIDE', 'AKSES_JALA': 'AKSES_JALAN', 'KELAS_JALA': 'KELAS_JALAN', 'ANTARMODA_': 'ANTARMODA_', 'MULTIMODA_': 'MULTIMODA_', 'PRASARANA_': 'PRASARANA_', 'RPJMN': 'RPJMN', 'RENSTRA_SE': 'RENSTRA_SE', 'LOKUS_BARU': 'LOKUS_BARU', 'EXERCISE_D': 'EXERCISE_DJTM', 'BUFFER_INT': 'BUFFER_INT', 'Validasi': 'Validasi', });
lyr_Simpul_1.set('fieldImages', {'NO': 'TextEdit', 'SIMPUL': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN_': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI_T': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS': 'TextEdit', 'LUAS_LAHAN': 'TextEdit', 'LUAS_BANGU': 'TextEdit', 'KAP_SIMPUL': 'TextEdit', 'KAP_PNP_HA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'KANTOR_OTO': 'TextEdit', 'KETERSEDIA': 'TextEdit', 'AKSES_JALA': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'ANTARMODA_': 'TextEdit', 'MULTIMODA_': 'TextEdit', 'PRASARANA_': 'TextEdit', 'RPJMN': 'TextEdit', 'RENSTRA_SE': 'TextEdit', 'LOKUS_BARU': 'TextEdit', 'EXERCISE_D': 'TextEdit', 'BUFFER_INT': 'TextEdit', 'Validasi': 'TextEdit', });
lyr_Simpul_1.set('fieldLabels', {'NO': 'hidden field', 'SIMPUL': 'inline label - visible with data', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABUPATEN_': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI_T': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS': 'inline label - always visible', 'LUAS_LAHAN': 'inline label - always visible', 'LUAS_BANGU': 'inline label - always visible', 'KAP_SIMPUL': 'inline label - always visible', 'KAP_PNP_HA': 'inline label - always visible', 'PENGELOLA': 'inline label - always visible', 'KANTOR_OTO': 'hidden field', 'KETERSEDIA': 'hidden field', 'AKSES_JALA': 'hidden field', 'KELAS_JALA': 'hidden field', 'ANTARMODA_': 'hidden field', 'MULTIMODA_': 'hidden field', 'PRASARANA_': 'hidden field', 'RPJMN': 'inline label - always visible', 'RENSTRA_SE': 'hidden field', 'LOKUS_BARU': 'hidden field', 'EXERCISE_D': 'inline label - always visible', 'BUFFER_INT': 'inline label - visible with data', 'Validasi': 'hidden field', });
lyr_Simpul_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});