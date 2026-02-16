"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const core_1 = require("./templates/data-manipulation/core");
const core_2 = require("./templates/visualization/core");
const core_3 = require("./templates/statistics/core");
const core_4 = require("./templates/machine-learning/core");
const core_5 = require("./templates/time-series/core");
const core_6 = require("./templates/optimization/core");
const core_7 = require("./templates/database/core");
const core_8 = require("./templates/reporting/core");
const core_9 = require("./templates/bioinformatics/core");
const core_10 = require("./templates/finance/core");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("sas", {
            idioms: ["Prefer DATA steps for row-wise transforms.", "Use PROCs for analytics and reporting."],
            templates: {
                "data-manipulation.core": (0, core_1.dataManipulationTemplate)(),
                "visualization.core": (0, core_2.visualizationTemplate)(),
                "statistics.core": (0, core_3.statisticsTemplate)(),
                "machine-learning.core": (0, core_4.machineLearningTemplate)(),
                "time-series.core": (0, core_5.timeSeriesTemplate)(),
                "optimization.core": (0, core_6.optimizationTemplate)(),
                "database.core": (0, core_7.databaseTemplate)(),
                "reporting.core": (0, core_8.reportingTemplate)(),
                "bioinformatics.core": (0, core_9.bioinformaticsTemplate)(),
                "finance.core": (0, core_10.financeTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
