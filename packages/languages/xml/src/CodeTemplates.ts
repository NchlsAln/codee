import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("xml", {
      idioms: ["Use consistent tag structure."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
