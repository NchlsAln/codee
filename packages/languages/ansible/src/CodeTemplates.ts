import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("ansible", {
      idioms: ["Prefer idempotent tasks."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
