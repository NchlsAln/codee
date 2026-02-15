import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("dockerfile", {
      idioms: ["Use multi-stage builds for smaller images."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
