import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("graphql", {
      idioms: ["Keep schema definitions modular."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}

