import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("assembly", {
      idioms: ["Use clear labels and comments."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
