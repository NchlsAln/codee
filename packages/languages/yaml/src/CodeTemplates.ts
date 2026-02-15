import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("yaml", {
      idioms: ["Prefer consistent indentation."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
