import { BaseLanguageAnalyzer } from "../../common/src/BaseLanguageAnalyzer";

export class LanguageAnalyzer extends BaseLanguageAnalyzer {
  constructor() {
    super("fsharp", "tree-sitter-fsharp");
  }
}
