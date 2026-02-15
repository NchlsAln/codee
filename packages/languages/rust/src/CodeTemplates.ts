import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("rust", {
      idioms: ["Prefer ownership-friendly APIs.", "Use Result for fallible operations."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
