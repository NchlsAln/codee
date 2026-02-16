import { BaseLanguageAnalyzer } from "@codee/lang-common";

export class LanguageAnalyzer extends BaseLanguageAnalyzer {
  constructor() {
    super("sed", "tree-sitter-sed");
  }
}
