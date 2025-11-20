var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kompilasi_SimpulPr_1 = new ol.format.GeoJSON();
var features_Kompilasi_SimpulPr_1 = format_Kompilasi_SimpulPr_1.readFeatures(json_Kompilasi_SimpulPr_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kompilasi_SimpulPr_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kompilasi_SimpulPr_1.addFeatures(features_Kompilasi_SimpulPr_1);
var lyr_Kompilasi_SimpulPr_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kompilasi_SimpulPr_1, 
                style: style_Kompilasi_SimpulPr_1,
                popuplayertitle: 'Kompilasi_SimpulPr',
                interactive: true,
    title: 'Kompilasi_SimpulPr<br />\
    <img src="styles/legend/Kompilasi_SimpulPr_1_0.png" /> Bandara<br />\
    <img src="styles/legend/Kompilasi_SimpulPr_1_1.png" /> Pelabuhan<br />\
    <img src="styles/legend/Kompilasi_SimpulPr_1_2.png" /> Stasiun<br />\
    <img src="styles/legend/Kompilasi_SimpulPr_1_3.png" /> TERMINAL<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Kompilasi_SimpulPr_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Kompilasi_SimpulPr_1];
lyr_Kompilasi_SimpulPr_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'No': 'No', 'JENIS_SIMP': 'JENIS_SIMP', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABUPATEN_': 'KABUPATEN_', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE_IATA': 'KODE_IATA', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI__': 'HIERARKI__', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_BAN': 'STATUS_BAN', });
lyr_Kompilasi_SimpulPr_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'No': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN_': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE_IATA': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI__': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_BAN': 'TextEdit', });
lyr_Kompilasi_SimpulPr_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'No': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABUPATEN_': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE_IATA': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI__': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_BAN': 'inline label - always visible', });
lyr_Kompilasi_SimpulPr_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});