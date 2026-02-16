import { BaseCodeTemplates } from "@codee/lang-common";
import { dataManipulationTemplate } from "./templates/data-manipulation/core";
import { visualizationTemplate } from "./templates/visualization/core";
import { statisticsTemplate } from "./templates/statistics/core";
import { machineLearningTemplate } from "./templates/machine-learning/core";
import { timeSeriesTemplate } from "./templates/time-series/core";
import { optimizationTemplate } from "./templates/optimization/core";
import { databaseTemplate } from "./templates/database/core";
import { reportingTemplate } from "./templates/reporting/core";
import { bioinformaticsTemplate } from "./templates/bioinformatics/core";
import { financeTemplate } from "./templates/finance/core";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("sql", {
      idioms: ["Keep queries readable.", "Prefer explicit joins."],
      templates: {
        "data-manipulation.core": dataManipulationTemplate(),
        "visualization.core": visualizationTemplate(),
        "statistics.core": statisticsTemplate(),
        "machine-learning.core": machineLearningTemplate(),
        "time-series.core": timeSeriesTemplate(),
        "optimization.core": optimizationTemplate(),
        "database.core": databaseTemplate(),
        "reporting.core": reportingTemplate(),
        "bioinformatics.core": bioinformaticsTemplate(),
        "finance.core": financeTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

