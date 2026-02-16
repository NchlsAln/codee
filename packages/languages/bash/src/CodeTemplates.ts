import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("bash", {
      idioms: ["Use set -euo pipefail for safety."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

