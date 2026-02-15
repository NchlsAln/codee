import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("sql", {
      idioms: ["Keep queries readable.", "Prefer explicit joins."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
