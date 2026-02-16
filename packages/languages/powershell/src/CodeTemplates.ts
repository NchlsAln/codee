import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("powershell", {
      idioms: ["Prefer verb-noun cmdlet names."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

