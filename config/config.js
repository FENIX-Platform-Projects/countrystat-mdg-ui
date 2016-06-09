/*global define*/
define(function () {

    'use strict';

    return {
        TOP_MENU: '../../../config/submodules/fx-menu/topmenu_config.json',
        MD_EXPORT_URL: 'http://fenixservices.fao.org/d3s',
        DATA_ENVIROMENT_URL: 'http://fenixservices.fao.org',

        environment: "production",

        //Analysis
        catalogSelectorsRegistry: {
            contextSystem: {
                selector: {
                    source: [
                        {value: "cstat_mdg", label: "CountrySTAT Madagascar"}
                    ],
                    default: ["cstat_mdg"]
                }
            },
            dataDomain: {
                cl : {
                    uid: "CountrySTAT_Indicators",
                    level : 1,
                    levels : 1
                }
            }
        },
        catalogBaseFilter: {
            "dsd.contextSystem": {"enumeration": ["cstat_mdg"]},
            "meContent.resourceRepresentationType": {"enumeration": ["dataset"]}
        },
        catalogDefaultSelectors: ["referenceArea", "dataDomain"],
        catalogMenuExcludedItems : ["accessibility"]

    };

});