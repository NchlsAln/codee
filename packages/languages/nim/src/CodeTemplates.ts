import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("nim", {
      idioms: ["Prefer explicit types for public APIs."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
