import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("csharp", {
      idioms: ["Follow .NET conventions.", "Prefer async/await for IO."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
