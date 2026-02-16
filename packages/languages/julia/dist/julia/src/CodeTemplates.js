"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const async_1 = require("./templates/concurrency/async");
const dataframes_1 = require("./templates/data-analysis/dataframes");
const plots_1 = require("./templates/visualization/plots");
const flux_1 = require("./templates/ml/flux");
const genie_1 = require("./templates/data-analysis/genie");
const sqlite_1 = require("./templates/database/sqlite");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("julia", {
            idioms: ["Favor vectorized operations.", "Use multiple dispatch.", "Keep functions type-stable."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "concurrency.async": (0, async_1.asyncTemplate)(),
                "data-analysis.dataframes": (0, dataframes_1.dataFramesTemplate)(),
                "data-analysis.genie": (0, genie_1.genieTemplate)(),
                "visualization.plots": (0, plots_1.plotsTemplate)(),
                "ml.flux": (0, flux_1.fluxTemplate)(),
                "database.sqlite": (0, sqlite_1.sqliteTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
