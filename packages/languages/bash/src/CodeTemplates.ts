import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

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
