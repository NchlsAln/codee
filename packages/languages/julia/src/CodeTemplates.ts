import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("julia", {
      idioms: ["Favor vectorized operations."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
