import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("c", {
      idioms: ["Prefer clear and portable C."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

