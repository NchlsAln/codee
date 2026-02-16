import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("vbnet", {
      idioms: ["Use clear naming and .NET conventions."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

