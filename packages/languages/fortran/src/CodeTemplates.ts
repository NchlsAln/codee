import { BaseCodeTemplates } from "@codee/lang-common";

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

