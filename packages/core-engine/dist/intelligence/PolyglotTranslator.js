"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolyglotTranslator = void 0;
const polyglot_knowledge_1 = require("@codee/polyglot-knowledge");
class PolyglotTranslator {
    listConcepts() {
        return (0, polyglot_knowledge_1.listConcepts)();
    }
    extractConcepts(code) {
        return (0, polyglot_knowledge_1.extractConceptsFromCode)(code);
    }
    detectPatterns(code, language) {
        return (0, polyglot_knowledge_1.detectPatternMatches)(code, language);
    }
    listConceptImplementations() {
        return (0, polyglot_knowledge_1.listConceptImplementations)();
    }
    translate(from, to, code, options) {
        return (0, polyglot_knowledge_1.translateCode)(from, to, code, options);
    }
}
exports.PolyglotTranslator = PolyglotTranslator;
