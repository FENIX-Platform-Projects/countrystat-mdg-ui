/*global require*/
require([
    '../../submodules/fenix-ui-catalog/js/paths',
    '../../submodules/fenix-ui-analysis/js/paths',
    '../../submodules/fenix-ui-menu/js/paths',
    '../../submodules/fenix-ui-table-creator/src/js/paths',
    '../../submodules/fenix-ui-chart-creator/src/js/paths',
    '../../submodules/fenix-ui-map-creator/src/js/paths',
    '../../submodules/fenix-ui-metadata-viewer/src/js/paths',
    '../../submodules/fenix-ui-common/js/paths',
    '../../submodules/fenix-ui-filter/src/js/paths',
    '../../submodules/fenix-ui-common/js/Compiler',
    '../../submodules/fenix-ui-reports/src/js/paths'
], function (Catalog, Analysis, Menu, TableCreator, ChartCreator, MapCreator, MetadataViewer, /*FAOSTAT_THEME, faostatCommons,*/ FenixCommons, Filter, Compiler, FenixReports) {

    'use strict';

    var catalogConfig = Catalog;
    catalogConfig.baseUrl = '../../submodules/fenix-ui-catalog/js';

    var analysisConfig = Analysis;
    analysisConfig.baseUrl = '../../submodules/fenix-ui-analysis/js/';

    var menuConfig = Menu;
    menuConfig.baseUrl = '../../submodules/fenix-ui-menu/js';

    var tableCreatorConfig = TableCreator;
    tableCreatorConfig.baseUrl = '../../submodules/fenix-ui-table-creator/src/js';

    var chartCreatorConfig = ChartCreator;
    chartCreatorConfig.baseUrl = '../../submodules/fenix-ui-chart-creator/src/js';

    var mapCreatorConfig = MapCreator;
    mapCreatorConfig.baseUrl = '../../submodules/fenix-ui-map-creator/src/js';

    var metadataViewerConfig = MetadataViewer;
    metadataViewerConfig.baseUrl = '../../submodules/fenix-ui-metadata-viewer/src/js/';

    var fenixCommonConfig = FenixCommons;
    fenixCommonConfig.baseUrl = '../../submodules/fenix-ui-common/js';

    var filterConfig = Filter;
    filterConfig.baseUrl = '../../submodules/fenix-ui-filter/';

    var fenixReportsConfig = FenixReports;
    fenixReportsConfig.baseUrl = '../../submodules/fenix-ui-reports/src/js';

    Compiler.resolve([catalogConfig, analysisConfig, menuConfig, tableCreatorConfig, chartCreatorConfig, mapCreatorConfig, metadataViewerConfig,
        fenixCommonConfig, filterConfig, fenixReportsConfig], {
        placeholders: {"FENIX_CDN": "//fenixrepo.fao.org/cdn"},
        config: {
            waitSeconds : 30,

            // Specify the paths of vendor libraries
            paths: {
                host: '../analysis/host',
                underscore: "{FENIX_CDN}/js/underscore/1.7.0/underscore.min",
                'packery': '{FENIX_CDN}/js/packery/1.4.3/dist/packery.pkgd.min',

                'host/config' : '../../config/config',
                'fx-menu/templates': '../../scripts/templates',


                //Components configuration
                "fx-cat-br/config/fx-catalog-blank-filter": '../../config/submodules/catalog/blankFilter',
                'fx-ana/config/services' : '../../config/submodules/analysis/services',

                'fx-cat-br/config/config' : '../../config/submodules/fx-catalog/configAnalisi',
                'fx-filter/config/config-default' : '../../config/submodules/filter/config',
                'fx-common/config/auth_users': "../../config/auth_users.json",

                'fx-submodules/config/baseConfig': '../../config/submodules/config_base',

                // METADATA VIEWER
                'fx-md-v/config/': '../../config/submodules/fx-md-viewer/',
                'fx-md-v/config/config': '../../config/submodules/fx-md-viewer/config',

                'fx-report/config/md-export/config' : '../../config/submodules/fx-report/md-export/config',
            },

            // Underscore and Backbone are not AMD-capable per default,
            // so we need to use the AMD wrapping of RequireJS
            shim: {
                underscore: {
                    exports: '_'
                }
            }
            // For easier development, disable browser caching
            // Of course, this should be removed in a production environment
            //, urlArgs: 'bust=' +  (new Date()).getTime()
        }
    });

    require(['host'], function (Host) {

        new Host().start();

    });
});