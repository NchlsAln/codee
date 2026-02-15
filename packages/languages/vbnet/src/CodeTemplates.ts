import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("vbnet", {
      idioms: ["Use clear naming and .NET conventions."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
