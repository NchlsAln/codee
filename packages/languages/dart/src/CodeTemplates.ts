import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("dart", {
      idioms: ["Prefer const constructors.", "Use named parameters."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
