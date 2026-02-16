import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("lua", {
      idioms: ["Prefer local variables.", "Use tables consistently."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

