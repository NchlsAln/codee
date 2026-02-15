import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("haskell", {
      idioms: ["Prefer pure functions.", "Use type signatures."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
