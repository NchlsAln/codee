import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("ruby", {
      idioms: ["Prefer idiomatic Ruby.", "Use blocks and enumerables."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
