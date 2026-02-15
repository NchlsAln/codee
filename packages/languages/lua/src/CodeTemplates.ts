import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("lua", {
      idioms: ["Prefer local variables.", "Use tables consistently."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
