import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("perl", {
      idioms: ["Prefer clarity over cleverness."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
