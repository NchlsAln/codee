import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("dockerfile", {
      idioms: ["Use multi-stage builds for smaller images."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

