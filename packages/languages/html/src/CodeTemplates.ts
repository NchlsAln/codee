import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("html", {
      idioms: ["Use semantic HTML elements."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
