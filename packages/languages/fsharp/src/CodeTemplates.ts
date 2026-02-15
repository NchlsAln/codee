import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("fsharp", {
      idioms: ["Use immutability.", "Prefer pattern matching."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
