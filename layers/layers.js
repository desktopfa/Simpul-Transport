var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Simpul_ASDP_1 = new ol.format.GeoJSON();
var features_Simpul_ASDP_1 = format_Simpul_ASDP_1.readFeatures(json_Simpul_ASDP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Simpul_ASDP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Simpul_ASDP_1.addFeatures(features_Simpul_ASDP_1);
var lyr_Simpul_ASDP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Simpul_ASDP_1, 
                style: style_Simpul_ASDP_1,
                popuplayertitle: 'Simpul_ASDP',
                interactive: true,
                title: '<img src="styles/legend/Simpul_ASDP_1.png" /> Simpul_ASDP'
            });
var format_Longlist_Project_2 = new ol.format.GeoJSON();
var features_Longlist_Project_2 = format_Longlist_Project_2.readFeatures(json_Longlist_Project_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Longlist_Project_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Longlist_Project_2.addFeatures(features_Longlist_Project_2);
var lyr_Longlist_Project_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Longlist_Project_2, 
                style: style_Longlist_Project_2,
                popuplayertitle: 'Longlist_Project',
                interactive: true,
    title: 'Longlist_Project<br />\
    <img src="styles/legend/Longlist_Project_2_0.png" /> Bandara<br />\
    <img src="styles/legend/Longlist_Project_2_1.png" /> Pelabuhan<br />\
    <img src="styles/legend/Longlist_Project_2_2.png" /> Stasiun<br />\
    <img src="styles/legend/Longlist_Project_2_3.png" /> Terminal<br />' });
var format_Simpul_Shortlist_3 = new ol.format.GeoJSON();
var features_Simpul_Shortlist_3 = format_Simpul_Shortlist_3.readFeatures(json_Simpul_Shortlist_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Simpul_Shortlist_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Simpul_Shortlist_3.addFeatures(features_Simpul_Shortlist_3);
var lyr_Simpul_Shortlist_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Simpul_Shortlist_3, 
                style: style_Simpul_Shortlist_3,
                popuplayertitle: 'Simpul_Shortlist',
                interactive: true,
    title: 'Simpul_Shortlist<br />\
    <img src="styles/legend/Simpul_Shortlist_3_0.png" /> Bandara<br />\
    <img src="styles/legend/Simpul_Shortlist_3_1.png" /> Pelabuhan<br />\
    <img src="styles/legend/Simpul_Shortlist_3_2.png" /> Stasiun<br />\
    <img src="styles/legend/Simpul_Shortlist_3_3.png" /> Terminal<br />' });
var format_Simpul_Prioritas_4 = new ol.format.GeoJSON();
var features_Simpul_Prioritas_4 = format_Simpul_Prioritas_4.readFeatures(json_Simpul_Prioritas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Simpul_Prioritas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Simpul_Prioritas_4.addFeatures(features_Simpul_Prioritas_4);
var lyr_Simpul_Prioritas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Simpul_Prioritas_4, 
                style: style_Simpul_Prioritas_4,
                popuplayertitle: 'Simpul_Prioritas',
                interactive: true,
    title: 'Simpul_Prioritas<br />\
    <img src="styles/legend/Simpul_Prioritas_4_0.png" /> Bandara<br />\
    <img src="styles/legend/Simpul_Prioritas_4_1.png" /> Pelabuhan<br />\
    <img src="styles/legend/Simpul_Prioritas_4_2.png" /> Stasiun<br />\
    <img src="styles/legend/Simpul_Prioritas_4_3.png" /> Terminal<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Simpul_ASDP_1.setVisible(true);lyr_Longlist_Project_2.setVisible(true);lyr_Simpul_Shortlist_3.setVisible(false);lyr_Simpul_Prioritas_4.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Simpul_ASDP_1,lyr_Longlist_Project_2,lyr_Simpul_Shortlist_3,lyr_Simpul_Prioritas_4];
lyr_Simpul_ASDP_1.set('fieldAliases', {'NO': 'NO', 'SIMPUL': 'SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'HIERARKI1': 'HIERARKI1', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_PEL': 'STATUS_PEL', 'PENGELOLA': 'PENGELOLA', 'TIPE_PENGE': 'TIPE_PENGE', 'KANTOR_PEN': 'KANTOR_PEN', 'KOMERSIL_N': 'KOMERSIL_N', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_K_1': 'STATUS_K_1', 'F22': 'F22', 'F23': 'F23', 'F24': 'F24', 'F25': 'F25', 'F26': 'F26', 'F27': 'F27', 'F28': 'F28', 'F29': 'F29', 'F30': 'F30', 'F31': 'F31', 'F32': 'F32', 'F33': 'F33', 'F34': 'F34', 'F35': 'F35', 'F36': 'F36', 'F37': 'F37', 'F38': 'F38', 'F39': 'F39', 'F40': 'F40', 'F41': 'F41', 'F42': 'F42', 'F43': 'F43', 'F44': 'F44', 'F45': 'F45', 'F46': 'F46', 'F47': 'F47', 'F48': 'F48', 'F49': 'F49', 'F50': 'F50', 'F51': 'F51', 'F52': 'F52', 'F53': 'F53', 'F54': 'F54', 'F55': 'F55', 'F56': 'F56', 'F57': 'F57', 'F58': 'F58', 'F59': 'F59', 'F60': 'F60', 'F61': 'F61', 'F62': 'F62', 'F63': 'F63', 'F64': 'F64', 'F65': 'F65', 'F66': 'F66', 'F67': 'F67', 'F68': 'F68', 'F69': 'F69', 'F70': 'F70', 'F71': 'F71', 'F72': 'F72', 'F73': 'F73', 'F74': 'F74', 'F75': 'F75', 'F76': 'F76', 'F77': 'F77', 'F78': 'F78', 'F79': 'F79', 'F80': 'F80', 'F81': 'F81', });
lyr_Longlist_Project_2.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS_SIMP', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'AKTIF_NON_': 'AKTIF_NON_', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'RTRWN': 'RTRWN', 'RPJMN': 'RPJMN', 'RATA_RATA': 'RATA-RATA PNP', 'TERCANTUM': 'Renstra DJITM', });
lyr_Simpul_Shortlist_3.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS_SIMP', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'STATUS__AK': 'AKTIF_NONAKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_K_1': 'STATUS_K_1', 'RATA_RATA': 'RATA-RATA PNP', 'RENSTRA_DJ': 'RENSTRA DJITM', 'SKORING_PR': 'SKORING_PR', 'SKORING__1': 'SKORING__1', 'SKORING_RT': 'SKORING_RT', 'SKORING_RP': 'SKORING_RP', 'SKORING_RE': 'SKORING_RE', 'TOTAL_SKOR': 'TOTAL_SKOR', 'layer': 'layer', 'path': 'path', });
lyr_Simpul_Prioritas_4.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS_SIMP', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'STATUS__AK': 'AKTIF_NONAKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_K_1': 'STATUS_K_1', 'RATA_RATA': 'RATA-RATA PNP', 'RENSTRA_DJ': 'RENSTRA DJITM', 'SKORING_PR': 'SKORING_PR', 'SKORING__1': 'SKORING__1', 'SKORING_RT': 'SKORING_RT', 'SKORING_RP': 'SKORING_RP', 'SKORING_RE': 'SKORING_RE', 'TOTAL_SKOR': 'TOTAL_SKOR', });
lyr_Simpul_ASDP_1.set('fieldImages', {'NO': 'TextEdit', 'SIMPUL': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'HIERARKI1': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_PEL': 'TextEdit', 'PENGELOLA': 'TextEdit', 'TIPE_PENGE': 'TextEdit', 'KANTOR_PEN': 'TextEdit', 'KOMERSIL_N': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_K_1': 'TextEdit', 'F22': 'TextEdit', 'F23': 'TextEdit', 'F24': 'TextEdit', 'F25': 'TextEdit', 'F26': 'TextEdit', 'F27': 'TextEdit', 'F28': 'TextEdit', 'F29': 'TextEdit', 'F30': 'TextEdit', 'F31': 'TextEdit', 'F32': 'TextEdit', 'F33': 'TextEdit', 'F34': 'TextEdit', 'F35': 'TextEdit', 'F36': 'TextEdit', 'F37': 'TextEdit', 'F38': 'TextEdit', 'F39': 'TextEdit', 'F40': 'TextEdit', 'F41': 'TextEdit', 'F42': 'TextEdit', 'F43': 'TextEdit', 'F44': 'TextEdit', 'F45': 'TextEdit', 'F46': 'TextEdit', 'F47': 'TextEdit', 'F48': 'TextEdit', 'F49': 'TextEdit', 'F50': 'TextEdit', 'F51': 'TextEdit', 'F52': 'TextEdit', 'F53': 'TextEdit', 'F54': 'TextEdit', 'F55': 'TextEdit', 'F56': 'TextEdit', 'F57': 'TextEdit', 'F58': 'TextEdit', 'F59': 'TextEdit', 'F60': 'TextEdit', 'F61': 'TextEdit', 'F62': 'TextEdit', 'F63': 'TextEdit', 'F64': 'TextEdit', 'F65': 'TextEdit', 'F66': 'TextEdit', 'F67': 'TextEdit', 'F68': 'TextEdit', 'F69': 'TextEdit', 'F70': 'TextEdit', 'F71': 'TextEdit', 'F72': 'TextEdit', 'F73': 'TextEdit', 'F74': 'TextEdit', 'F75': 'TextEdit', 'F76': 'TextEdit', 'F77': 'TextEdit', 'F78': 'TextEdit', 'F79': 'TextEdit', 'F80': 'TextEdit', 'F81': 'TextEdit', });
lyr_Longlist_Project_2.set('fieldImages', {'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'AKTIF_NON_': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'RTRWN': 'TextEdit', 'RPJMN': 'TextEdit', 'RATA_RATA': 'TextEdit', 'TERCANTUM': 'TextEdit', });
lyr_Simpul_Shortlist_3.set('fieldImages', {'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'STATUS__AK': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_K_1': 'TextEdit', 'RATA_RATA': 'TextEdit', 'RENSTRA_DJ': 'TextEdit', 'SKORING_PR': 'TextEdit', 'SKORING__1': 'TextEdit', 'SKORING_RT': 'TextEdit', 'SKORING_RP': 'TextEdit', 'SKORING_RE': 'TextEdit', 'TOTAL_SKOR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Simpul_Prioritas_4.set('fieldImages', {'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'STATUS__AK': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_K_1': 'TextEdit', 'RATA_RATA': 'TextEdit', 'RENSTRA_DJ': 'TextEdit', 'SKORING_PR': 'TextEdit', 'SKORING__1': 'TextEdit', 'SKORING_RT': 'TextEdit', 'SKORING_RP': 'TextEdit', 'SKORING_RE': 'TextEdit', 'TOTAL_SKOR': 'TextEdit', });
lyr_Simpul_ASDP_1.set('fieldLabels', {'NO': 'no label', 'SIMPUL': 'inline label - always visible', 'PULAU': 'no label', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'no label', 'KELAS': 'no label', 'HIERARKI': 'inline label - always visible', 'HIERARKI1': 'no label', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_PEL': 'inline label - always visible', 'PENGELOLA': 'inline label - always visible', 'TIPE_PENGE': 'no label', 'KANTOR_PEN': 'no label', 'KOMERSIL_N': 'inline label - always visible', 'STATUS_KOT': 'no label', 'STATUS_K_1': 'no label', 'F22': 'no label', 'F23': 'no label', 'F24': 'no label', 'F25': 'no label', 'F26': 'no label', 'F27': 'no label', 'F28': 'no label', 'F29': 'no label', 'F30': 'no label', 'F31': 'no label', 'F32': 'no label', 'F33': 'no label', 'F34': 'no label', 'F35': 'no label', 'F36': 'no label', 'F37': 'no label', 'F38': 'no label', 'F39': 'no label', 'F40': 'no label', 'F41': 'no label', 'F42': 'no label', 'F43': 'no label', 'F44': 'no label', 'F45': 'no label', 'F46': 'no label', 'F47': 'no label', 'F48': 'no label', 'F49': 'no label', 'F50': 'no label', 'F51': 'no label', 'F52': 'no label', 'F53': 'no label', 'F54': 'no label', 'F55': 'no label', 'F56': 'no label', 'F57': 'no label', 'F58': 'no label', 'F59': 'no label', 'F60': 'no label', 'F61': 'no label', 'F62': 'no label', 'F63': 'no label', 'F64': 'no label', 'F65': 'no label', 'F66': 'no label', 'F67': 'no label', 'F68': 'no label', 'F69': 'no label', 'F70': 'no label', 'F71': 'no label', 'F72': 'no label', 'F73': 'no label', 'F74': 'no label', 'F75': 'no label', 'F76': 'no label', 'F77': 'no label', 'F78': 'no label', 'F79': 'no label', 'F80': 'no label', 'F81': 'no label', });
lyr_Longlist_Project_2.set('fieldLabels', {'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'inline label - visible with data', 'AKTIF_NON_': 'inline label - visible with data', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'RTRWN': 'inline label - always visible', 'RPJMN': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'TERCANTUM': 'inline label - always visible', });
lyr_Simpul_Shortlist_3.set('fieldLabels', {'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - visible with data', 'KELAS': 'inline label - visible with data', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'inline label - visible with data', 'STATUS__AK': 'inline label - visible with data', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'STATUS_KOT': 'inline label - always visible', 'STATUS_K_1': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'RENSTRA_DJ': 'hidden field', 'SKORING_PR': 'hidden field', 'SKORING__1': 'hidden field', 'SKORING_RT': 'hidden field', 'SKORING_RP': 'hidden field', 'SKORING_RE': 'hidden field', 'TOTAL_SKOR': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Simpul_Prioritas_4.set('fieldLabels', {'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'inline label - visible with data', 'STATUS__AK': 'inline label - visible with data', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'STATUS_KOT': 'inline label - always visible', 'STATUS_K_1': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'RENSTRA_DJ': 'hidden field', 'SKORING_PR': 'hidden field', 'SKORING__1': 'hidden field', 'SKORING_RT': 'hidden field', 'SKORING_RP': 'hidden field', 'SKORING_RE': 'hidden field', 'TOTAL_SKOR': 'hidden field', });
lyr_Simpul_Prioritas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});