import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("go", {
      idioms: ["Keep functions small.", "Prefer explicit error handling."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
