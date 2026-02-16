import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { stringsTemplate } from "./templates/stdlib/strings";
import { phoenixControllerTemplate } from "./templates/web-frameworks/phoenix-controller";
import { plugRouterTemplate } from "./templates/web-frameworks/plug-router";
import { liveViewTemplate } from "./templates/web-frameworks/liveview";
import { exUnitTemplate } from "./templates/testing/exunit";
import { ectoSchemaTemplate } from "./templates/database/ecto-schema";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("elixir", {
      idioms: ["Use pattern matching.", "Favor pipelines for clarity."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "stdlib.strings": stringsTemplate()
      },
      frameworkTemplates: {
        "web.phoenix.controller": phoenixControllerTemplate(),
        "web.plug.router": plugRouterTemplate(),
        "web.liveview": liveViewTemplate(),
        "database.ecto.schema": ectoSchemaTemplate()
      },
      testTemplates: {
        exunit: exUnitTemplate()
      }
    });
  }
}

