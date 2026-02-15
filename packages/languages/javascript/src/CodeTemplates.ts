import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("javascript", {
      idioms: ["Use modern ES syntax.", "Prefer const and let.", "Avoid implicit globals."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}