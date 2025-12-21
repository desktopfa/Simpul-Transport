var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Longlist_1 = new ol.format.GeoJSON();
var features_Longlist_1 = format_Longlist_1.readFeatures(json_Longlist_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Longlist_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Longlist_1.addFeatures(features_Longlist_1);
var lyr_Longlist_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Longlist_1, 
                style: style_Longlist_1,
                popuplayertitle: 'Longlist',
                interactive: false,
                title: '<img src="styles/legend/Longlist_1.png" /> Longlist'
            });
var format_Bandara_Longlist_2 = new ol.format.GeoJSON();
var features_Bandara_Longlist_2 = format_Bandara_Longlist_2.readFeatures(json_Bandara_Longlist_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bandara_Longlist_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bandara_Longlist_2.addFeatures(features_Bandara_Longlist_2);
var lyr_Bandara_Longlist_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bandara_Longlist_2, 
                style: style_Bandara_Longlist_2,
                popuplayertitle: 'Bandara_Longlist',
                interactive: true,
                title: '<img src="styles/legend/Bandara_Longlist_2.png" /> Bandara_Longlist'
            });
var format_Pelabuhan_Longlist_3 = new ol.format.GeoJSON();
var features_Pelabuhan_Longlist_3 = format_Pelabuhan_Longlist_3.readFeatures(json_Pelabuhan_Longlist_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pelabuhan_Longlist_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pelabuhan_Longlist_3.addFeatures(features_Pelabuhan_Longlist_3);
var lyr_Pelabuhan_Longlist_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pelabuhan_Longlist_3, 
                style: style_Pelabuhan_Longlist_3,
                popuplayertitle: 'Pelabuhan_Longlist',
                interactive: true,
                title: '<img src="styles/legend/Pelabuhan_Longlist_3.png" /> Pelabuhan_Longlist'
            });
var format_Stasiun_Longlist_4 = new ol.format.GeoJSON();
var features_Stasiun_Longlist_4 = format_Stasiun_Longlist_4.readFeatures(json_Stasiun_Longlist_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stasiun_Longlist_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stasiun_Longlist_4.addFeatures(features_Stasiun_Longlist_4);
var lyr_Stasiun_Longlist_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stasiun_Longlist_4, 
                style: style_Stasiun_Longlist_4,
                popuplayertitle: 'Stasiun_Longlist',
                interactive: true,
                title: '<img src="styles/legend/Stasiun_Longlist_4.png" /> Stasiun_Longlist'
            });
var format_Terminal_Longlist_5 = new ol.format.GeoJSON();
var features_Terminal_Longlist_5 = format_Terminal_Longlist_5.readFeatures(json_Terminal_Longlist_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terminal_Longlist_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terminal_Longlist_5.addFeatures(features_Terminal_Longlist_5);
var lyr_Terminal_Longlist_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terminal_Longlist_5, 
                style: style_Terminal_Longlist_5,
                popuplayertitle: 'Terminal_Longlist',
                interactive: true,
                title: '<img src="styles/legend/Terminal_Longlist_5.png" /> Terminal_Longlist'
            });
var format_Bandara_Shortlist_6 = new ol.format.GeoJSON();
var features_Bandara_Shortlist_6 = format_Bandara_Shortlist_6.readFeatures(json_Bandara_Shortlist_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bandara_Shortlist_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bandara_Shortlist_6.addFeatures(features_Bandara_Shortlist_6);
var lyr_Bandara_Shortlist_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bandara_Shortlist_6, 
                style: style_Bandara_Shortlist_6,
                popuplayertitle: 'Bandara_Shortlist',
                interactive: true,
                title: '<img src="styles/legend/Bandara_Shortlist_6.png" /> Bandara_Shortlist'
            });
var format_Pelabuhan_Shortlist_7 = new ol.format.GeoJSON();
var features_Pelabuhan_Shortlist_7 = format_Pelabuhan_Shortlist_7.readFeatures(json_Pelabuhan_Shortlist_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pelabuhan_Shortlist_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pelabuhan_Shortlist_7.addFeatures(features_Pelabuhan_Shortlist_7);
var lyr_Pelabuhan_Shortlist_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pelabuhan_Shortlist_7, 
                style: style_Pelabuhan_Shortlist_7,
                popuplayertitle: 'Pelabuhan_Shortlist',
                interactive: true,
                title: '<img src="styles/legend/Pelabuhan_Shortlist_7.png" /> Pelabuhan_Shortlist'
            });
var format_Stasiun_Shortlist_8 = new ol.format.GeoJSON();
var features_Stasiun_Shortlist_8 = format_Stasiun_Shortlist_8.readFeatures(json_Stasiun_Shortlist_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stasiun_Shortlist_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stasiun_Shortlist_8.addFeatures(features_Stasiun_Shortlist_8);
var lyr_Stasiun_Shortlist_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stasiun_Shortlist_8, 
                style: style_Stasiun_Shortlist_8,
                popuplayertitle: 'Stasiun_Shortlist',
                interactive: true,
                title: '<img src="styles/legend/Stasiun_Shortlist_8.png" /> Stasiun_Shortlist'
            });
var format_Terminal_Shortlist_9 = new ol.format.GeoJSON();
var features_Terminal_Shortlist_9 = format_Terminal_Shortlist_9.readFeatures(json_Terminal_Shortlist_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terminal_Shortlist_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terminal_Shortlist_9.addFeatures(features_Terminal_Shortlist_9);
var lyr_Terminal_Shortlist_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terminal_Shortlist_9, 
                style: style_Terminal_Shortlist_9,
                popuplayertitle: 'Terminal_Shortlist',
                interactive: true,
                title: '<img src="styles/legend/Terminal_Shortlist_9.png" /> Terminal_Shortlist'
            });
var format_Bandara_Prio_10 = new ol.format.GeoJSON();
var features_Bandara_Prio_10 = format_Bandara_Prio_10.readFeatures(json_Bandara_Prio_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bandara_Prio_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bandara_Prio_10.addFeatures(features_Bandara_Prio_10);
var lyr_Bandara_Prio_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bandara_Prio_10, 
                style: style_Bandara_Prio_10,
                popuplayertitle: 'Bandara_Prio',
                interactive: true,
                title: '<img src="styles/legend/Bandara_Prio_10.png" /> Bandara_Prio'
            });
var format_Pelabuhan_Prio_11 = new ol.format.GeoJSON();
var features_Pelabuhan_Prio_11 = format_Pelabuhan_Prio_11.readFeatures(json_Pelabuhan_Prio_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pelabuhan_Prio_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pelabuhan_Prio_11.addFeatures(features_Pelabuhan_Prio_11);
var lyr_Pelabuhan_Prio_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pelabuhan_Prio_11, 
                style: style_Pelabuhan_Prio_11,
                popuplayertitle: 'Pelabuhan_Prio',
                interactive: true,
                title: '<img src="styles/legend/Pelabuhan_Prio_11.png" /> Pelabuhan_Prio'
            });
var format_Terminal_Prio_12 = new ol.format.GeoJSON();
var features_Terminal_Prio_12 = format_Terminal_Prio_12.readFeatures(json_Terminal_Prio_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terminal_Prio_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terminal_Prio_12.addFeatures(features_Terminal_Prio_12);
var lyr_Terminal_Prio_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terminal_Prio_12, 
                style: style_Terminal_Prio_12,
                popuplayertitle: 'Terminal_Prio',
                interactive: true,
                title: '<img src="styles/legend/Terminal_Prio_12.png" /> Terminal_Prio'
            });
var format_Stasiun_Prio_13 = new ol.format.GeoJSON();
var features_Stasiun_Prio_13 = format_Stasiun_Prio_13.readFeatures(json_Stasiun_Prio_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stasiun_Prio_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stasiun_Prio_13.addFeatures(features_Stasiun_Prio_13);
var lyr_Stasiun_Prio_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stasiun_Prio_13, 
                style: style_Stasiun_Prio_13,
                popuplayertitle: 'Stasiun_Prio',
                interactive: true,
                title: '<img src="styles/legend/Stasiun_Prio_13.png" /> Stasiun_Prio'
            });
var group_SimpulPrioritas = new ol.layer.Group({
                                layers: [lyr_Bandara_Prio_10,lyr_Pelabuhan_Prio_11,lyr_Terminal_Prio_12,lyr_Stasiun_Prio_13,],
                                fold: 'close',
                                title: 'Simpul Prioritas'});
var group_SimpulShortlist = new ol.layer.Group({
                                layers: [lyr_Bandara_Shortlist_6,lyr_Pelabuhan_Shortlist_7,lyr_Stasiun_Shortlist_8,lyr_Terminal_Shortlist_9,],
                                fold: 'close',
                                title: 'Simpul Shortlist'});
var group_SimpulLonglist = new ol.layer.Group({
                                layers: [lyr_Bandara_Longlist_2,lyr_Pelabuhan_Longlist_3,lyr_Stasiun_Longlist_4,lyr_Terminal_Longlist_5,],
                                fold: 'close',
                                title: 'Simpul Longlist'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Longlist_1.setVisible(false);lyr_Bandara_Longlist_2.setVisible(true);lyr_Pelabuhan_Longlist_3.setVisible(true);lyr_Stasiun_Longlist_4.setVisible(true);lyr_Terminal_Longlist_5.setVisible(true);lyr_Bandara_Shortlist_6.setVisible(true);lyr_Pelabuhan_Shortlist_7.setVisible(true);lyr_Stasiun_Shortlist_8.setVisible(true);lyr_Terminal_Shortlist_9.setVisible(true);lyr_Bandara_Prio_10.setVisible(true);lyr_Pelabuhan_Prio_11.setVisible(true);lyr_Terminal_Prio_12.setVisible(true);lyr_Stasiun_Prio_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Longlist_1,group_SimpulLonglist,group_SimpulShortlist,group_SimpulPrioritas];
lyr_Longlist_1.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS_SIMP', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'AKTIF/NON-': 'AKTIF/NON-', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'RTRWN': 'RTRWN', 'RPJMN': 'RPJMN', 'RATA-RATA': 'RATA-RATA', 'TERCANTUM': 'TERCANTUM', });
lyr_Bandara_Longlist_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'AKTIF_NON_': 'AKTIF/NON-AKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'RTRWN': 'RTRWN', 'RPJMN': 'RPJMN', 'RATA_RATA': 'RATARATAPR', 'TERCANTUM': 'RENSTRADJITM', });
lyr_Pelabuhan_Longlist_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'AKTIF_NON_': 'AKTIF/NON-AKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'RTRWN': 'RTRWN', 'RPJMN': 'RPJMN', 'RATA_RATA': 'RATARATAPR', 'TERCANTUM': 'RENSTRADJITM', });
lyr_Stasiun_Longlist_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'AKTIF_NON_': 'AKTIF/NON-AKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'RTRWN': 'RTRWN', 'RPJMN': 'RPJMN', 'RATA_RATA': 'RATARATAPR', 'TERCANTUM': 'RENSTRADJITM', });
lyr_Terminal_Longlist_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'AKTIF_NON_': 'AKTIF/NON-AKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'RTRWN': 'RTRWN', 'RPJMN': 'RPJMN', 'RATA_RATA': 'RATA_RATA', 'TERCANTUM': 'RENSTRADJITM', });
lyr_Bandara_Shortlist_6.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'STATUS__AK': 'AKTIF/NON-AKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_K_1': 'STATUS_K_1', 'RATA_RATA': 'RATARATAPR', 'RENSTRA_DJ': 'RENSTRADJITM', 'SKORING_PR': 'SKORING_PR', 'SKORING__1': 'SKORING__1', 'SKORING_RT': 'SKORING_RT', 'SKORING_RP': 'SKORING_RP', 'SKORING_RE': 'SKORING_RE', 'TOTAL_SKOR': 'TOTAL_SKOR', });
lyr_Pelabuhan_Shortlist_7.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'STATUS__AK': 'AKTIF/NON-AKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_K_1': 'STATUS_K_1', 'RATA_RATA': 'RATARATAPR', 'RENSTRA_DJ': 'RENSTRADJITM', 'SKORING_PR': 'SKORING_PR', 'SKORING__1': 'SKORING__1', 'SKORING_RT': 'SKORING_RT', 'SKORING_RP': 'SKORING_RP', 'SKORING_RE': 'SKORING_RE', 'TOTAL_SKOR': 'TOTAL_SKOR', });
lyr_Stasiun_Shortlist_8.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'STATUS__AK': 'AKTIF/NON-AKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_K_1': 'STATUS_K_1', 'RATA_RATA': 'RATARATAPR', 'RENSTRA_DJ': 'RENSTRADJITM', 'SKORING_PR': 'SKORING_PR', 'SKORING__1': 'SKORING__1', 'SKORING_RT': 'SKORING_RT', 'SKORING_RP': 'SKORING_RP', 'SKORING_RE': 'SKORING_RE', 'TOTAL_SKOR': 'TOTAL_SKOR', });
lyr_Terminal_Shortlist_9.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'STATUS__AK': 'AKTIF/NON-AKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_K_1': 'STATUS_K_1', 'RATA_RATA': 'RATARATAPR', 'RENSTRA_DJ': 'RENSTRADJITM', 'SKORING_PR': 'SKORING_PR', 'SKORING__1': 'SKORING__1', 'SKORING_RT': 'SKORING_RT', 'SKORING_RP': 'SKORING_RP', 'SKORING_RE': 'SKORING_RE', 'TOTAL_SKOR': 'TOTAL_SKOR', });
lyr_Bandara_Prio_10.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'STATUS__AK': 'AKTIF/NON-AKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_K_1': 'STATUS_K_1', 'RATA_RATA': 'RATARATAPR', 'RENSTRA_DJ': 'RENSTRADJITM', 'SKORING_PR': 'SKORING_PR', 'SKORING__1': 'SKORING__1', 'SKORING_RT': 'SKORING_RT', 'SKORING_RP': 'SKORING_RP', 'SKORING_RE': 'SKORING_RE', 'TOTAL_SKOR': 'TOTAL_SKOR', });
lyr_Pelabuhan_Prio_11.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'STATUS__AK': 'AKTIF/NON-AKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_K_1': 'STATUS_K_1', 'RATA_RATA': 'RATARATAPR', 'RENSTRA_DJ': 'RENSTRADJITM', 'SKORING_PR': 'SKORING_PR', 'SKORING__1': 'SKORING__1', 'SKORING_RT': 'SKORING_RT', 'SKORING_RP': 'SKORING_RP', 'SKORING_RE': 'SKORING_RE', 'TOTAL_SKOR': 'TOTAL_SKOR', });
lyr_Terminal_Prio_12.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'STATUS__AK': 'AKTIF/NON-AKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_K_1': 'STATUS_K_1', 'RATA_RATA': 'RATARATAPR', 'RENSTRA_DJ': 'RENSTRADJITM', 'SKORING_PR': 'SKORING_PR', 'SKORING__1': 'SKORING__1', 'SKORING_RT': 'SKORING_RT', 'SKORING_RP': 'SKORING_RP', 'SKORING_RE': 'SKORING_RE', 'TOTAL_SKOR': 'TOTAL_SKOR', });
lyr_Stasiun_Prio_13.set('fieldAliases', {'NO': 'NO', 'ID': 'ID', 'JENIS_SIMP': 'JENIS SIMPUL', 'PULAU': 'PULAU', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'NAMA_OBJEK': 'NAMA_OBJEK', 'KODE': 'KODE', 'KATEGORI': 'KATEGORI', 'KELAS': 'KELAS', 'HIERARKI': 'HIERARKI', 'ALAMAT': 'ALAMAT', 'LONG': 'LONG', 'LAT': 'LAT', 'STATUS_OPE': 'STATUS_OPE', 'STATUS__AK': 'AKTIF/NON-AKTIF', 'KELAS_JALA': 'KELAS_JALA', 'PENGELOLA': 'PENGELOLA', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_K_1': 'STATUS_K_1', 'RATA_RATA': 'RATARATAPR', 'RENSTRA_DJ': 'RENSTRADJITM', 'SKORING_PR': 'SKORING_PR', 'SKORING__1': 'SKORING__1', 'SKORING_RT': 'SKORING_RT', 'SKORING_RP': 'SKORING_RP', 'SKORING_RE': 'SKORING_RE', 'TOTAL_SKOR': 'TOTAL_SKOR', });
lyr_Longlist_1.set('fieldImages', {'NO': '', 'ID': '', 'JENIS_SIMP': '', 'PULAU': '', 'PROVINSI': '', 'KABKOT': '', 'NAMA_OBJEK': '', 'KODE': '', 'KATEGORI': '', 'KELAS': '', 'HIERARKI': '', 'ALAMAT': '', 'LONG': '', 'LAT': '', 'STATUS_OPE': '', 'AKTIF/NON-': '', 'KELAS_JALA': '', 'PENGELOLA': '', 'RTRWN': '', 'RPJMN': '', 'RATA-RATA': '', 'TERCANTUM': '', });
lyr_Bandara_Longlist_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'AKTIF_NON_': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'RTRWN': 'TextEdit', 'RPJMN': 'TextEdit', 'RATA_RATA': 'TextEdit', 'TERCANTUM': 'TextEdit', });
lyr_Pelabuhan_Longlist_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'AKTIF_NON_': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'RTRWN': 'TextEdit', 'RPJMN': 'TextEdit', 'RATA_RATA': 'TextEdit', 'TERCANTUM': 'TextEdit', });
lyr_Stasiun_Longlist_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'AKTIF_NON_': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'RTRWN': 'TextEdit', 'RPJMN': 'TextEdit', 'RATA_RATA': 'TextEdit', 'TERCANTUM': 'TextEdit', });
lyr_Terminal_Longlist_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'AKTIF_NON_': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'RTRWN': 'TextEdit', 'RPJMN': 'TextEdit', 'RATA_RATA': 'TextEdit', 'TERCANTUM': 'TextEdit', });
lyr_Bandara_Shortlist_6.set('fieldImages', {'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'STATUS__AK': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_K_1': 'TextEdit', 'RATA_RATA': 'TextEdit', 'RENSTRA_DJ': 'TextEdit', 'SKORING_PR': 'TextEdit', 'SKORING__1': 'TextEdit', 'SKORING_RT': 'TextEdit', 'SKORING_RP': 'TextEdit', 'SKORING_RE': 'TextEdit', 'TOTAL_SKOR': 'TextEdit', });
lyr_Pelabuhan_Shortlist_7.set('fieldImages', {'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'STATUS__AK': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_K_1': 'TextEdit', 'RATA_RATA': 'TextEdit', 'RENSTRA_DJ': 'TextEdit', 'SKORING_PR': 'TextEdit', 'SKORING__1': 'TextEdit', 'SKORING_RT': 'TextEdit', 'SKORING_RP': 'TextEdit', 'SKORING_RE': 'TextEdit', 'TOTAL_SKOR': 'TextEdit', });
lyr_Stasiun_Shortlist_8.set('fieldImages', {'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'STATUS__AK': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_K_1': 'TextEdit', 'RATA_RATA': 'TextEdit', 'RENSTRA_DJ': 'TextEdit', 'SKORING_PR': 'TextEdit', 'SKORING__1': 'TextEdit', 'SKORING_RT': 'TextEdit', 'SKORING_RP': 'TextEdit', 'SKORING_RE': 'TextEdit', 'TOTAL_SKOR': 'TextEdit', });
lyr_Terminal_Shortlist_9.set('fieldImages', {'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'STATUS__AK': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_K_1': 'TextEdit', 'RATA_RATA': 'TextEdit', 'RENSTRA_DJ': 'TextEdit', 'SKORING_PR': 'TextEdit', 'SKORING__1': 'TextEdit', 'SKORING_RT': 'TextEdit', 'SKORING_RP': 'TextEdit', 'SKORING_RE': 'TextEdit', 'TOTAL_SKOR': 'TextEdit', });
lyr_Bandara_Prio_10.set('fieldImages', {'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'STATUS__AK': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_K_1': 'TextEdit', 'RATA_RATA': 'TextEdit', 'RENSTRA_DJ': 'TextEdit', 'SKORING_PR': 'TextEdit', 'SKORING__1': 'TextEdit', 'SKORING_RT': 'TextEdit', 'SKORING_RP': 'TextEdit', 'SKORING_RE': 'TextEdit', 'TOTAL_SKOR': 'TextEdit', });
lyr_Pelabuhan_Prio_11.set('fieldImages', {'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'STATUS__AK': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_K_1': 'TextEdit', 'RATA_RATA': 'TextEdit', 'RENSTRA_DJ': 'TextEdit', 'SKORING_PR': 'TextEdit', 'SKORING__1': 'TextEdit', 'SKORING_RT': 'TextEdit', 'SKORING_RP': 'TextEdit', 'SKORING_RE': 'TextEdit', 'TOTAL_SKOR': 'TextEdit', });
lyr_Terminal_Prio_12.set('fieldImages', {'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'STATUS__AK': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_K_1': 'TextEdit', 'RATA_RATA': 'TextEdit', 'RENSTRA_DJ': 'TextEdit', 'SKORING_PR': 'TextEdit', 'SKORING__1': 'TextEdit', 'SKORING_RT': 'TextEdit', 'SKORING_RP': 'TextEdit', 'SKORING_RE': 'TextEdit', 'TOTAL_SKOR': 'TextEdit', });
lyr_Stasiun_Prio_13.set('fieldImages', {'NO': 'TextEdit', 'ID': 'TextEdit', 'JENIS_SIMP': 'TextEdit', 'PULAU': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'NAMA_OBJEK': 'TextEdit', 'KODE': 'TextEdit', 'KATEGORI': 'TextEdit', 'KELAS': 'TextEdit', 'HIERARKI': 'TextEdit', 'ALAMAT': 'TextEdit', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'STATUS_OPE': 'TextEdit', 'STATUS__AK': 'TextEdit', 'KELAS_JALA': 'TextEdit', 'PENGELOLA': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_K_1': 'TextEdit', 'RATA_RATA': 'TextEdit', 'RENSTRA_DJ': 'TextEdit', 'SKORING_PR': 'TextEdit', 'SKORING__1': 'TextEdit', 'SKORING_RT': 'TextEdit', 'SKORING_RP': 'TextEdit', 'SKORING_RE': 'TextEdit', 'TOTAL_SKOR': 'TextEdit', });
lyr_Longlist_1.set('fieldLabels', {'NO': 'header label - visible with data', 'ID': 'no label', 'JENIS_SIMP': 'no label', 'PULAU': 'no label', 'PROVINSI': 'no label', 'KABKOT': 'no label', 'NAMA_OBJEK': 'no label', 'KODE': 'no label', 'KATEGORI': 'no label', 'KELAS': 'no label', 'HIERARKI': 'no label', 'ALAMAT': 'no label', 'LONG': 'no label', 'LAT': 'no label', 'STATUS_OPE': 'no label', 'AKTIF/NON-': 'no label', 'KELAS_JALA': 'no label', 'PENGELOLA': 'no label', 'RTRWN': 'no label', 'RPJMN': 'no label', 'RATA-RATA': 'no label', 'TERCANTUM': 'no label', });
lyr_Bandara_Longlist_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'no label', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'inline label - always visible', 'AKTIF_NON_': 'inline label - always visible', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'RTRWN': 'inline label - always visible', 'RPJMN': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'TERCANTUM': 'inline label - always visible', });
lyr_Pelabuhan_Longlist_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'hidden field', 'AKTIF_NON_': 'no label', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'RTRWN': 'inline label - always visible', 'RPJMN': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'TERCANTUM': 'inline label - always visible', });
lyr_Stasiun_Longlist_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'hidden field', 'AKTIF_NON_': 'inline label - always visible', 'KELAS_JALA': 'inline label - always visible', 'PENGELOLA': 'inline label - always visible', 'RTRWN': 'inline label - always visible', 'RPJMN': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'TERCANTUM': 'inline label - always visible', });
lyr_Terminal_Longlist_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'hidden field', 'AKTIF_NON_': 'inline label - always visible', 'KELAS_JALA': 'inline label - always visible', 'PENGELOLA': 'inline label - always visible', 'RTRWN': 'inline label - always visible', 'RPJMN': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'TERCANTUM': 'inline label - always visible', });
lyr_Bandara_Shortlist_6.set('fieldLabels', {'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'inline label - always visible', 'STATUS__AK': 'inline label - always visible', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'STATUS_KOT': 'inline label - always visible', 'STATUS_K_1': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'RENSTRA_DJ': 'inline label - always visible', 'SKORING_PR': 'hidden field', 'SKORING__1': 'hidden field', 'SKORING_RT': 'hidden field', 'SKORING_RP': 'hidden field', 'SKORING_RE': 'hidden field', 'TOTAL_SKOR': 'hidden field', });
lyr_Pelabuhan_Shortlist_7.set('fieldLabels', {'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'no label', 'STATUS__AK': 'inline label - always visible', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'STATUS_KOT': 'inline label - always visible', 'STATUS_K_1': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'RENSTRA_DJ': 'inline label - always visible', 'SKORING_PR': 'hidden field', 'SKORING__1': 'hidden field', 'SKORING_RT': 'hidden field', 'SKORING_RP': 'hidden field', 'SKORING_RE': 'hidden field', 'TOTAL_SKOR': 'hidden field', });
lyr_Stasiun_Shortlist_8.set('fieldLabels', {'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'no label', 'STATUS__AK': 'inline label - always visible', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'STATUS_KOT': 'inline label - always visible', 'STATUS_K_1': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'RENSTRA_DJ': 'inline label - always visible', 'SKORING_PR': 'hidden field', 'SKORING__1': 'hidden field', 'SKORING_RT': 'hidden field', 'SKORING_RP': 'hidden field', 'SKORING_RE': 'hidden field', 'TOTAL_SKOR': 'hidden field', });
lyr_Terminal_Shortlist_9.set('fieldLabels', {'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'no label', 'STATUS__AK': 'inline label - always visible', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'STATUS_KOT': 'hidden field', 'STATUS_K_1': 'hidden field', 'RATA_RATA': 'hidden field', 'RENSTRA_DJ': 'hidden field', 'SKORING_PR': 'hidden field', 'SKORING__1': 'hidden field', 'SKORING_RT': 'hidden field', 'SKORING_RP': 'hidden field', 'SKORING_RE': 'hidden field', 'TOTAL_SKOR': 'hidden field', });
lyr_Bandara_Prio_10.set('fieldLabels', {'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'inline label - always visible', 'STATUS__AK': 'inline label - always visible', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'STATUS_KOT': 'inline label - always visible', 'STATUS_K_1': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'RENSTRA_DJ': 'inline label - always visible', 'SKORING_PR': 'inline label - always visible', 'SKORING__1': 'inline label - always visible', 'SKORING_RT': 'inline label - always visible', 'SKORING_RP': 'inline label - always visible', 'SKORING_RE': 'inline label - always visible', 'TOTAL_SKOR': 'inline label - always visible', });
lyr_Pelabuhan_Prio_11.set('fieldLabels', {'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'no label', 'STATUS__AK': 'inline label - always visible', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'STATUS_KOT': 'inline label - always visible', 'STATUS_K_1': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'RENSTRA_DJ': 'inline label - always visible', 'SKORING_PR': 'inline label - always visible', 'SKORING__1': 'inline label - always visible', 'SKORING_RT': 'inline label - always visible', 'SKORING_RP': 'inline label - always visible', 'SKORING_RE': 'inline label - always visible', 'TOTAL_SKOR': 'inline label - always visible', });
lyr_Terminal_Prio_12.set('fieldLabels', {'NO': 'hidden field', 'ID': 'hidden field', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'no label', 'STATUS__AK': 'inline label - always visible', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'STATUS_KOT': 'inline label - always visible', 'STATUS_K_1': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'RENSTRA_DJ': 'inline label - always visible', 'SKORING_PR': 'inline label - always visible', 'SKORING__1': 'inline label - always visible', 'SKORING_RT': 'inline label - always visible', 'SKORING_RP': 'inline label - always visible', 'SKORING_RE': 'inline label - always visible', 'TOTAL_SKOR': 'inline label - always visible', });
lyr_Stasiun_Prio_13.set('fieldLabels', {'NO': 'hidden field', 'ID': 'inline label - always visible', 'JENIS_SIMP': 'inline label - always visible', 'PULAU': 'hidden field', 'PROVINSI': 'inline label - always visible', 'KABKOT': 'inline label - always visible', 'NAMA_OBJEK': 'inline label - always visible', 'KODE': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'KELAS': 'inline label - always visible', 'HIERARKI': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'LONG': 'inline label - always visible', 'LAT': 'inline label - always visible', 'STATUS_OPE': 'no label', 'STATUS__AK': 'inline label - always visible', 'KELAS_JALA': 'hidden field', 'PENGELOLA': 'inline label - always visible', 'STATUS_KOT': 'inline label - always visible', 'STATUS_K_1': 'inline label - always visible', 'RATA_RATA': 'inline label - always visible', 'RENSTRA_DJ': 'inline label - always visible', 'SKORING_PR': 'inline label - always visible', 'SKORING__1': 'inline label - always visible', 'SKORING_RT': 'inline label - always visible', 'SKORING_RP': 'inline label - always visible', 'SKORING_RE': 'inline label - always visible', 'TOTAL_SKOR': 'inline label - always visible', });
lyr_Stasiun_Prio_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});