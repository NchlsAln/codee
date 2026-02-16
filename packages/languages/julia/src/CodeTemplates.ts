import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { asyncTemplate } from "./templates/concurrency/async";
import { dataFramesTemplate } from "./templates/data-analysis/dataframes";
import { plotsTemplate } from "./templates/visualization/plots";
import { fluxTemplate } from "./templates/ml/flux";
import { genieTemplate } from "./templates/data-analysis/genie";
import { sqliteTemplate } from "./templates/database/sqlite";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("julia", {
      idioms: ["Favor vectorized operations.", "Use multiple dispatch.", "Keep functions type-stable."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "concurrency.async": asyncTemplate(),
        "data-analysis.dataframes": dataFramesTemplate(),
        "data-analysis.genie": genieTemplate(),
        "visualization.plots": plotsTemplate(),
        "ml.flux": fluxTemplate(),
        "database.sqlite": sqliteTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

