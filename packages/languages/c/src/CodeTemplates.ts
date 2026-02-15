import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("c", {
      idioms: ["Prefer clear and portable C."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
