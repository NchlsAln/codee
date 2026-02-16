import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { asyncTemplate } from "./templates/concurrency/async";
import { ffiTemplate } from "./templates/systems/ffi";
import { servantTemplate } from "./templates/functional/servant";
import { persistentTemplate } from "./templates/functional/persistent";
import { conduitTemplate } from "./templates/functional/conduit";
import { hspecTemplate } from "./templates/functional/hspec";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("haskell", {
      idioms: ["Prefer pure functions.", "Use type signatures.", "Lean on type classes."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "systems.ffi": ffiTemplate(),
        "functional.servant": servantTemplate(),
        "functional.persistent": persistentTemplate(),
        "functional.conduit": conduitTemplate(),
        "functional.hspec": hspecTemplate(),
        "concurrency.stm": asyncTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

