import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { asyncTemplate } from "./templates/concurrency/async";
import { signalTemplate } from "./templates/data-analysis/signal-processing";
import { imageTemplate } from "./templates/data-analysis/image-processing";
import { controlTemplate } from "./templates/data-analysis/control-systems";
import { plotTemplate } from "./templates/visualization/plotting";
import { mlTemplate } from "./templates/ml/ml-toolbox";
import { databaseTemplate } from "./templates/database/database-connection";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("matlab", {
      idioms: ["Vectorize operations when possible.", "Prefer matrix operations.", "Keep scripts reproducible."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "concurrency.parallel": asyncTemplate(),
        "data-analysis.signal-processing": signalTemplate(),
        "data-analysis.image-processing": imageTemplate(),
        "data-analysis.control-systems": controlTemplate(),
        "visualization.plotting": plotTemplate(),
        "ml.toolbox": mlTemplate(),
        "database.connection": databaseTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

