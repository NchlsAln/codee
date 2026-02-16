import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("perl", {
      idioms: ["Prefer clarity over cleverness."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

