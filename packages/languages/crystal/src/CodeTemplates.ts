import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { asyncTemplate } from "./templates/concurrency/async";
import { cInteropTemplate } from "./templates/systems/c-interop";
import { sliceTemplate } from "./templates/systems/slice";
import { kemalTemplate } from "./templates/functional/kemal";
import { amberTemplate } from "./templates/functional/amber";
import { luckyTemplate } from "./templates/functional/lucky";
import { graniteTemplate } from "./templates/functional/granite";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("crystal", {
      idioms: ["Prefer explicit types where useful.", "Use blocks for iteration.", "Leverage macros for codegen."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "systems.c-interop": cInteropTemplate(),
        "systems.slice": sliceTemplate(),
        "functional.kemal": kemalTemplate(),
        "functional.amber": amberTemplate(),
        "functional.lucky": luckyTemplate(),
        "functional.granite": graniteTemplate(),
        "concurrency.fibers": asyncTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

