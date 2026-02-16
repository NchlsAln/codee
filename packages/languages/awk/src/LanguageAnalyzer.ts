import { BaseLanguageAnalyzer } from "@codee/lang-common";

export class LanguageAnalyzer extends BaseLanguageAnalyzer {
  constructor() {
    super("awk", "tree-sitter-awk");
  }
}
