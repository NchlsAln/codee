import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

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
