import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("groovy", {
      idioms: ["Use Groovy idioms for brevity."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
