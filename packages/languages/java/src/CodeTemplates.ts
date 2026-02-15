import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("java", {
      idioms: ["Follow standard Java conventions.", "Prefer immutability when possible."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
