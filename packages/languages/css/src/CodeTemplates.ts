import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("css", {
      idioms: ["Use consistent naming conventions."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
