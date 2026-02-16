import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("objective-c", {
      idioms: ["Prefer modern Objective-C conventions."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

