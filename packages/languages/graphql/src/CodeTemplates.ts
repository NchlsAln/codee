import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

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
