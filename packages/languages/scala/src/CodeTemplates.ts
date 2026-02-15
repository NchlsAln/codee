import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("scala", {
      idioms: ["Prefer immutability.", "Use pattern matching."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
