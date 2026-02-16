import { BaseLanguageAnalyzer } from "@codee/lang-common";

export class LanguageAnalyzer extends BaseLanguageAnalyzer {
  constructor() {
    super("sas", "tree-sitter-sas");
  }
}
