import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("kotlin", {
      idioms: ["Prefer data classes.", "Use null safety effectively."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
