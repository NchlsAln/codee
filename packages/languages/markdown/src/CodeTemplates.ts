import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("markdown", {
      idioms: ["Use headings and lists for structure."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
