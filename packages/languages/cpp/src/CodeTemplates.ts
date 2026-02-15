import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("cpp", {
      idioms: ["Prefer modern C++17 patterns.", "Use RAII for resource management."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
