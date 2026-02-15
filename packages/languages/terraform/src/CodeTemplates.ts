import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("terraform", {
      idioms: ["Use modules for reuse.", "Pin provider versions."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
