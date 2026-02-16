"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const async_1 = require("./templates/concurrency/async");
const signal_processing_1 = require("./templates/data-analysis/signal-processing");
const image_processing_1 = require("./templates/data-analysis/image-processing");
const control_systems_1 = require("./templates/data-analysis/control-systems");
const plotting_1 = require("./templates/visualization/plotting");
const ml_toolbox_1 = require("./templates/ml/ml-toolbox");
const database_connection_1 = require("./templates/database/database-connection");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("matlab", {
            idioms: ["Vectorize operations when possible.", "Prefer matrix operations.", "Keep scripts reproducible."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "concurrency.parallel": (0, async_1.asyncTemplate)(),
                "data-analysis.signal-processing": (0, signal_processing_1.signalTemplate)(),
                "data-analysis.image-processing": (0, image_processing_1.imageTemplate)(),
                "data-analysis.control-systems": (0, control_systems_1.controlTemplate)(),
                "visualization.plotting": (0, plotting_1.plotTemplate)(),
                "ml.toolbox": (0, ml_toolbox_1.mlTemplate)(),
                "database.connection": (0, database_connection_1.databaseTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
