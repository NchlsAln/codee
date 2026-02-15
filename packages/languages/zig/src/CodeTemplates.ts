import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("zig", {
      idioms: ["Prefer explicit control over implicit behavior."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
