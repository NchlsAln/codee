import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("fortran", {
      idioms: ["Prefer clear variable naming."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
