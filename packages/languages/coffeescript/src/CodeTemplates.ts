import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("coffeescript", {
      idioms: ["Prefer clarity over dense syntax."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

