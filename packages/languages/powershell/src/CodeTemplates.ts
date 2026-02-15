import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("powershell", {
      idioms: ["Prefer verb-noun cmdlet names."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
