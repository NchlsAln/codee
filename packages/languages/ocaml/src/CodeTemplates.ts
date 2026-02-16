import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { asyncTemplate } from "./templates/concurrency/async";
import { ctypesTemplate } from "./templates/systems/ctypes";
import { dreamTemplate } from "./templates/functional/dream";
import { caqtiTemplate } from "./templates/functional/caqti";
import { alcotestTemplate } from "./templates/functional/alcotest";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("ocaml", {
      idioms: ["Prefer pure functions where possible.", "Use pattern matching.", "Structure code with modules."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "systems.ctypes": ctypesTemplate(),
        "functional.dream": dreamTemplate(),
        "functional.caqti": caqtiTemplate(),
        "functional.alcotest": alcotestTemplate(),
        "concurrency.lwt": asyncTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

