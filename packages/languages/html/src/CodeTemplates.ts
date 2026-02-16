import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("html", {
      idioms: ["Use semantic HTML elements."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

