import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("erlang", {
      idioms: ["Favor pattern matching.", "Use OTP conventions."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
