import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("json", {
      idioms: ["Keep schemas consistent."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
