import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("markdown", {
      idioms: ["Use headings and lists for structure."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

