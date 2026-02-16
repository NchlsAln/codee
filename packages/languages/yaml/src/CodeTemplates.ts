import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("yaml", {
      idioms: ["Prefer consistent indentation."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

