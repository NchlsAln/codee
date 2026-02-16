import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { asyncTemplate } from "./templates/concurrency/async";
import { httpServerTemplate } from "./templates/systems/http-server";
import { wasmTemplate } from "./templates/systems/wasm";
import { embeddedTemplate } from "./templates/systems/embedded";
import { comptimeTemplate } from "./templates/functional/comptime";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("zig", {
      idioms: ["Prefer explicit control over implicit behavior.", "Pass allocators explicitly.", "Use comptime for metaprogramming."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "systems.http-server": httpServerTemplate(),
        "systems.wasm": wasmTemplate(),
        "systems.embedded": embeddedTemplate(),
        "functional.comptime": comptimeTemplate(),
        "concurrency.threads": asyncTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

