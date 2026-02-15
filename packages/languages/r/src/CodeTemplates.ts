import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("r", {
      idioms: ["Favor tidyverse style when appropriate."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
