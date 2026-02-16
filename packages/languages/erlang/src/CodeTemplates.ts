import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { stringsTemplate } from "./templates/stdlib/strings";
import { cowboyHandlerTemplate } from "./templates/web-frameworks/cowboy-handler";
import { webmachineResourceTemplate } from "./templates/web-frameworks/webmachine-resource";
import { nitrogenPageTemplate } from "./templates/web-frameworks/nitrogen-page";
import { eunitTemplate } from "./templates/testing/eunit";
import { mnesiaTemplate } from "./templates/database/mnesia";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("erlang", {
      idioms: ["Favor pattern matching.", "Use OTP conventions."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "stdlib.strings": stringsTemplate()
      },
      frameworkTemplates: {
        "web.cowboy.handler": cowboyHandlerTemplate(),
        "web.webmachine.resource": webmachineResourceTemplate(),
        "web.nitrogen.page": nitrogenPageTemplate(),
        "database.mnesia": mnesiaTemplate()
      },
      testTemplates: {
        eunit: eunitTemplate()
      }
    });
  }
}

