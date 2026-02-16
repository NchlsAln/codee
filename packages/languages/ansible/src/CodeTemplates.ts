import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("ansible", {
      idioms: ["Prefer idempotent tasks."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

