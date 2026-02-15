import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("crystal", {
      idioms: ["Prefer explicit types where useful."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
