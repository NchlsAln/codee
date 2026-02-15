import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("matlab", {
      idioms: ["Vectorize operations when possible."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
