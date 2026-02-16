import { BaseCodeTemplates } from "@codee/lang-common";
import { stdlibTemplate } from "./templates/stdlib/core";
import { systemsTemplate } from "./templates/systems/core";
import { webTemplate } from "./templates/web/core";
import { databaseTemplate } from "./templates/database/core";
import { concurrencyTemplate } from "./templates/concurrency/core";
import { testingTemplate } from "./templates/testing/core";
import { cliTemplate } from "./templates/cli/core";
import { httpTemplate } from "./templates/http/core";
import { serializationTemplate } from "./templates/serialization/core";
import { ffiTemplate } from "./templates/ffi/core";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("zig", {
      idioms: ["Prefer explicit control over implicit behavior.", "Pass allocators explicitly.", "Use comptime for metaprogramming."],
      templates: {
        "stdlib.core": stdlibTemplate(),
        "systems.core": systemsTemplate(),
        "web.core": webTemplate(),
        "database.core": databaseTemplate(),
        "concurrency.core": concurrencyTemplate(),
        "testing.core": testingTemplate(),
        "cli.core": cliTemplate(),
        "http.core": httpTemplate(),
        "serialization.core": serializationTemplate(),
        "ffi.core": ffiTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

