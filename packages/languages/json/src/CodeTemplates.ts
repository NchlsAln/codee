import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("json", {
      idioms: ["Keep schemas consistent."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

