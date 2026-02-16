"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageAnalyzer = void 0;
const lang_common_1 = require("@codee/lang-common");
class LanguageAnalyzer extends lang_common_1.BaseLanguageAnalyzer {
    constructor() {
        super("solidity", "tree-sitter-solidity");
    }
}
exports.LanguageAnalyzer = LanguageAnalyzer;
