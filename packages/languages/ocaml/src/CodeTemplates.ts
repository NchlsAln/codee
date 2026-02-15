import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("ocaml", {
      idioms: ["Prefer pure functions where possible."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
