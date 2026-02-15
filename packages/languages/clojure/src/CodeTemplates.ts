import { BaseCodeTemplates } from "../../common/src/BaseCodeTemplates";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("clojure", {
      idioms: ["Favor immutability.", "Use functional composition."],
      templates: {},
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
