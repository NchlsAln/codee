import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("coffeescript", {
      idioms: ["Prefer clarity over dense syntax."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
