import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("php", {
      idioms: ["Prefer modern PHP 8 features.", "Use strict types."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
