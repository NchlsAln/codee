import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { asyncTemplate } from "./templates/concurrency/async";
import { dplyrTemplate } from "./templates/data-analysis/dplyr";
import { ggplotTemplate } from "./templates/visualization/ggplot2";
import { caretTemplate } from "./templates/ml/caret";
import { shinyTemplate } from "./templates/visualization/shiny";
import { dbiTemplate } from "./templates/database/dbi";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("r", {
      idioms: ["Favor tidyverse style when appropriate.", "Use vectorized operations.", "Keep data in tibbles."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "concurrency.async": asyncTemplate(),
        "data-analysis.dplyr": dplyrTemplate(),
        "visualization.ggplot2": ggplotTemplate(),
        "visualization.shiny": shinyTemplate(),
        "ml.caret": caretTemplate(),
        "database.dbi": dbiTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

