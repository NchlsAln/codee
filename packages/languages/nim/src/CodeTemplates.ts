import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { asyncTemplate } from "./templates/concurrency/async";
import { chronosTemplate } from "./templates/concurrency/chronos";
import { cInteropTemplate } from "./templates/systems/c-interop";
import { allocatorTemplate } from "./templates/systems/allocator";
import { jesterTemplate } from "./templates/functional/jester";
import { karaxTemplate } from "./templates/functional/karax";
import { normTemplate } from "./templates/functional/norm";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("nim", {
      idioms: ["Prefer explicit types for public APIs.", "Use templates/macros for reuse.", "Lean on the effect system."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "systems.c-interop": cInteropTemplate(),
        "systems.allocator": allocatorTemplate(),
        "functional.jester": jesterTemplate(),
        "functional.karax": karaxTemplate(),
        "functional.norm": normTemplate(),
        "concurrency.async": asyncTemplate(),
        "concurrency.chronos": chronosTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

