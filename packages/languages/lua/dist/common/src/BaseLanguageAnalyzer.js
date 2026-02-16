"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLanguageAnalyzer = void 0;
class BaseLanguageAnalyzer {
    languageId;
    grammar;
    constructor(languageId, grammar) {
        this.languageId = languageId;
        this.grammar = grammar;
    }
    async analyze(_source) {
        return {
            functions: [],
            classes: [],
            imports: [],
            dependencies: [],
            complexity: {
                cyclomatic: 0,
                cognitive: 0,
                maintainability: 100
            },
            smells: []
        };
    }
}
exports.BaseLanguageAnalyzer = BaseLanguageAnalyzer;
