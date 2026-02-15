import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("swift", {
      idioms: ["Prefer value types.", "Use Swift conventions."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
