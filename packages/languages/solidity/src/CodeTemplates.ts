import { BaseCodeTemplates } from "@codee/lang-common";

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

