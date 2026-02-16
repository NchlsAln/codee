import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("xml", {
      idioms: ["Use consistent tag structure."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

