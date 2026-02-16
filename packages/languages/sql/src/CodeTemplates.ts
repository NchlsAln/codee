import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { asyncTemplate } from "./templates/concurrency/async";
import { analyticsTemplate } from "./templates/data-analysis/analytics";
import { chartDataTemplate } from "./templates/visualization/chart-data";
import { trainingTemplate } from "./templates/ml/training-data";
import { postgresTemplate } from "./templates/database/postgresql";
import { mysqlTemplate } from "./templates/database/mysql";
import { sqliteTemplate } from "./templates/database/sqlite";
import { migrationTemplate } from "./templates/database/migration";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("sql", {
      idioms: ["Keep queries readable.", "Prefer explicit joins."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "concurrency.transaction": asyncTemplate(),
        "data-analysis.analytics": analyticsTemplate(),
        "visualization.chart-data": chartDataTemplate(),
        "ml.training-data": trainingTemplate(),
        "database.postgresql": postgresTemplate(),
        "database.mysql": mysqlTemplate(),
        "database.sqlite": sqliteTemplate(),
        "database.migration": migrationTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

