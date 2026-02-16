"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const async_1 = require("./templates/concurrency/async");
const dplyr_1 = require("./templates/data-analysis/dplyr");
const ggplot2_1 = require("./templates/visualization/ggplot2");
const caret_1 = require("./templates/ml/caret");
const shiny_1 = require("./templates/visualization/shiny");
const dbi_1 = require("./templates/database/dbi");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("r", {
            idioms: ["Favor tidyverse style when appropriate.", "Use vectorized operations.", "Keep data in tibbles."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "concurrency.async": (0, async_1.asyncTemplate)(),
                "data-analysis.dplyr": (0, dplyr_1.dplyrTemplate)(),
                "visualization.ggplot2": (0, ggplot2_1.ggplotTemplate)(),
                "visualization.shiny": (0, shiny_1.shinyTemplate)(),
                "ml.caret": (0, caret_1.caretTemplate)(),
                "database.dbi": (0, dbi_1.dbiTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
