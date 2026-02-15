import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("elixir", {
      idioms: ["Use pattern matching.", "Favor pipelines for clarity."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
