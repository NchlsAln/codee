import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("solidity", {
      idioms: ["Prioritize security and explicitness."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
