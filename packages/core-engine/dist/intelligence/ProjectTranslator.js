"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTranslator = void 0;
const polyglot_knowledge_1 = require("@codee/polyglot-knowledge");
class ProjectTranslator {
    projectRoot;
    analyzer;
    translator;
    constructor(projectRoot) {
        this.projectRoot = projectRoot;
        this.analyzer = new polyglot_knowledge_1.ProjectAnalyzer(projectRoot);
        this.translator = new polyglot_knowledge_1.BatchTranslator(projectRoot);
    }
    async analyzeProject(language) {
        return this.analyzer.analyze(this.projectRoot, language);
    }
    async translateProject(options) {
        return this.translator.translate(options);
    }
}
exports.ProjectTranslator = ProjectTranslator;
