"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationSafety = exports.TranslationGit = exports.TypeRegistry = exports.BatchTranslator = exports.ProjectAnalyzer = void 0;
exports.listConcepts = listConcepts;
exports.extractConceptsFromCode = extractConceptsFromCode;
exports.translateCode = translateCode;
exports.listConceptImplementations = listConceptImplementations;
exports.detectPatternMatches = detectPatternMatches;
const patterns_1 = require("./concepts/concurrency/patterns");
const collections_1 = require("./concepts/data-structures/collections");
const memory_layout_1 = require("./concepts/data-structures/memory-layout");
const iterators_1 = require("./concepts/data-structures/iterators");
const async_patterns_1 = require("./concepts/control-flow/async-patterns");
const error_handling_1 = require("./concepts/control-flow/error-handling");
const pattern_matching_1 = require("./concepts/control-flow/pattern-matching");
const oop_1 = require("./concepts/paradigms/oop");
const functional_1 = require("./concepts/paradigms/functional");
const procedural_1 = require("./concepts/paradigms/procedural");
const generics_1 = require("./concepts/paradigms/generics");
const closures_1 = require("./concepts/paradigms/closures");
const to_typescript_1 = require("./mappings/python/to-typescript");
const to_rust_1 = require("./mappings/python/to-rust");
const to_python_1 = require("./mappings/typescript/to-python");
const to_rust_2 = require("./mappings/typescript/to-rust");
const pattern_detector_1 = require("./analysis/pattern-detector");
const translation_engine_1 = require("./engine/translation-engine");
const mapping_helpers_1 = require("./mappings/shared/mapping-helpers");
const implementations_1 = require("./implementations");
__exportStar(require("./types"), exports);
__exportStar(require("./validators/type-equivalence"), exports);
__exportStar(require("./validators/behavior-preservation"), exports);
__exportStar(require("./validators/performance-comparison"), exports);
__exportStar(require("./validators/behavioral-tests"), exports);
__exportStar(require("./validators/behavioral-validator"), exports);
__exportStar(require("./validators/performance-validator"), exports);
__exportStar(require("./validators/syntax-validator"), exports);
__exportStar(require("./validators/scale-validation"), exports);
__exportStar(require("./templates/api-design/rest-endpoint"), exports);
__exportStar(require("./templates/api-design/graphql-resolver"), exports);
__exportStar(require("./templates/algorithms/sorting"), exports);
__exportStar(require("./templates/algorithms/graph-traversal"), exports);
__exportStar(require("./templates/design-patterns/singleton"), exports);
__exportStar(require("./templates/design-patterns/factory"), exports);
__exportStar(require("./templates/design-patterns/observer"), exports);
__exportStar(require("./templates/design-patterns/strategy"), exports);
__exportStar(require("./concepts/core-concepts"), exports);
__exportStar(require("./concepts/coverage-matrix"), exports);
__exportStar(require("./mappings/python/to-typescript"), exports);
__exportStar(require("./mappings/python/to-rust"), exports);
__exportStar(require("./mappings/python/to-go"), exports);
__exportStar(require("./mappings/typescript/to-python"), exports);
__exportStar(require("./mappings/typescript/to-rust"), exports);
__exportStar(require("./mappings/typescript/to-go"), exports);
__exportStar(require("./mappings/rust/to-python"), exports);
__exportStar(require("./mappings/rust/to-typescript"), exports);
__exportStar(require("./mappings/rust/to-go"), exports);
__exportStar(require("./mappings/go/to-python"), exports);
__exportStar(require("./mappings/go/to-typescript"), exports);
__exportStar(require("./mappings/go/to-rust"), exports);
__exportStar(require("./mappings/java/to-python"), exports);
__exportStar(require("./mappings/java/to-typescript"), exports);
__exportStar(require("./mappings/java/to-rust"), exports);
__exportStar(require("./mappings/java/to-go"), exports);
__exportStar(require("./mappings/java/to-cpp"), exports);
__exportStar(require("./mappings/java/from-python"), exports);
__exportStar(require("./mappings/java/from-typescript"), exports);
__exportStar(require("./mappings/java/from-rust"), exports);
__exportStar(require("./mappings/java/from-go"), exports);
__exportStar(require("./mappings/cpp/to-python"), exports);
__exportStar(require("./mappings/cpp/to-typescript"), exports);
__exportStar(require("./mappings/cpp/to-rust"), exports);
__exportStar(require("./mappings/cpp/to-go"), exports);
__exportStar(require("./mappings/cpp/to-java"), exports);
__exportStar(require("./mappings/cpp/from-python"), exports);
__exportStar(require("./mappings/cpp/from-typescript"), exports);
__exportStar(require("./mappings/cpp/from-rust"), exports);
__exportStar(require("./mappings/cpp/from-go"), exports);
__exportStar(require("./mappings/kotlin/to-python"), exports);
__exportStar(require("./mappings/kotlin/to-typescript"), exports);
__exportStar(require("./mappings/kotlin/to-rust"), exports);
__exportStar(require("./mappings/scala/to-python"), exports);
__exportStar(require("./mappings/scala/to-typescript"), exports);
__exportStar(require("./mappings/scala/to-rust"), exports);
__exportStar(require("./mappings/csharp/to-python"), exports);
__exportStar(require("./mappings/csharp/to-typescript"), exports);
__exportStar(require("./mappings/csharp/to-rust"), exports);
__exportStar(require("./mappings/swift/to-python"), exports);
__exportStar(require("./mappings/swift/to-typescript"), exports);
__exportStar(require("./mappings/swift/to-rust"), exports);
__exportStar(require("./mappings/dart/to-python"), exports);
__exportStar(require("./mappings/dart/to-typescript"), exports);
__exportStar(require("./mappings/dart/to-rust"), exports);
__exportStar(require("./analysis/pattern-detector"), exports);
__exportStar(require("./engine/translation-engine"), exports);
__exportStar(require("./engine/multi-file"), exports);
__exportStar(require("./git"), exports);
__exportStar(require("./implementations"), exports);
__exportStar(require("./validators/integration-tests/types"), exports);
__exportStar(require("./validators/integration-tests/kotlin"), exports);
__exportStar(require("./validators/integration-tests/scala"), exports);
__exportStar(require("./validators/integration-tests/csharp"), exports);
__exportStar(require("./validators/integration-tests/swift"), exports);
__exportStar(require("./validators/integration-tests/dart"), exports);
var ProjectAnalyzer_1 = require("./engine/multi-file/ProjectAnalyzer");
Object.defineProperty(exports, "ProjectAnalyzer", { enumerable: true, get: function () { return ProjectAnalyzer_1.ProjectAnalyzer; } });
var BatchTranslator_1 = require("./engine/multi-file/BatchTranslator");
Object.defineProperty(exports, "BatchTranslator", { enumerable: true, get: function () { return BatchTranslator_1.BatchTranslator; } });
var TypeRegistry_1 = require("./engine/multi-file/TypeRegistry");
Object.defineProperty(exports, "TypeRegistry", { enumerable: true, get: function () { return TypeRegistry_1.TypeRegistry; } });
var TranslationGit_1 = require("./git/TranslationGit");
Object.defineProperty(exports, "TranslationGit", { enumerable: true, get: function () { return TranslationGit_1.TranslationGit; } });
var TranslationSafety_1 = require("./safety/TranslationSafety");
Object.defineProperty(exports, "TranslationSafety", { enumerable: true, get: function () { return TranslationSafety_1.TranslationSafety; } });
function listConcepts() {
    return [
        ...patterns_1.concurrencyPatterns,
        ...collections_1.collectionConcepts,
        ...iterators_1.iteratorConcepts,
        ...memory_layout_1.memoryLayoutConcepts,
        ...async_patterns_1.asyncPatterns,
        ...error_handling_1.errorHandlingConcepts,
        ...pattern_matching_1.patternMatchingConcepts,
        ...oop_1.oopConcepts,
        ...functional_1.functionalConcepts,
        ...generics_1.genericsConcepts,
        ...closures_1.closureConcepts,
        ...procedural_1.proceduralConcepts
    ];
}
function extractConceptsFromCode(code) {
    const matches = (0, pattern_detector_1.detectPatterns)(code, "python")
        .concat((0, pattern_detector_1.detectPatterns)(code, "typescript"))
        .concat((0, pattern_detector_1.detectPatterns)(code, "rust"))
        .concat((0, pattern_detector_1.detectPatterns)(code, "go"))
        .concat((0, pattern_detector_1.detectPatterns)(code, "java"))
        .concat((0, pattern_detector_1.detectPatterns)(code, "cpp"));
    const concepts = matches.flatMap((match) => mapPatternToConcept(match));
    return Array.from(new Set(concepts));
}
function translateCode(from, to, code, options) {
    const supported = new Set([
        "python",
        "typescript",
        "rust",
        "go",
        "java",
        "cpp",
        "kotlin",
        "scala",
        "csharp",
        "swift",
        "dart"
    ]);
    if (supported.has(from) && supported.has(to) && from !== to) {
        return (0, mapping_helpers_1.translateWithFallback)(from, to, code, options);
    }
    if ((from === "python" && (to === "typescript" || to === "rust" || to === "go")) ||
        (from === "typescript" && (to === "python" || to === "rust" || to === "go")) ||
        (from === "rust" && (to === "python" || to === "typescript" || to === "go")) ||
        (from === "go" && (to === "python" || to === "typescript" || to === "rust")) ||
        (from === "java" && (to === "python" || to === "typescript" || to === "rust" || to === "go" || to === "cpp")) ||
        (from === "cpp" && (to === "python" || to === "typescript" || to === "rust" || to === "go" || to === "java")) ||
        (to === "java" && (from === "python" || from === "typescript" || from === "rust" || from === "go" || from === "cpp")) ||
        (to === "cpp" && (from === "python" || from === "typescript" || from === "rust" || from === "go" || from === "java"))) {
        return (0, translation_engine_1.translateWithEngine)(from, to, code, options);
    }
    if (from === "python" && to === "typescript") {
        return (0, to_typescript_1.pythonToTypeScript)(code);
    }
    if (from === "python" && to === "rust") {
        return (0, to_rust_1.pythonToRust)(code);
    }
    if (from === "typescript" && to === "python") {
        return (0, to_python_1.typescriptToPython)(code);
    }
    if (from === "typescript" && to === "rust") {
        return (0, to_rust_2.typescriptToRust)(code);
    }
    return {
        output: `// TODO: Translation not implemented for ${from} -> ${to}.\n${code}`,
        concepts: extractConceptsFromCode(code),
        notes: ["Fallback translation path."]
    };
}
function listConceptImplementations() {
    return implementations_1.conceptImplementations;
}
function detectPatternMatches(code, language) {
    return (0, pattern_detector_1.detectPatterns)(code, language);
}
function mapPatternToConcept(match) {
    switch (match.id) {
        case "list-comprehension":
            return ["data-structures.list"];
        case "decorator":
            return ["paradigms.decorators"];
        case "async-await":
            return ["control-flow.async-await"];
        case "dataclass":
            return ["paradigms.dataclasses"];
        case "error-handling":
            return ["control-flow.exceptions"];
        case "dict-literal":
            return ["data-structures.map"];
        case "none-handling":
            return ["control-flow.result"];
        case "generics":
            return ["paradigms.generics"];
        case "iterators":
            return ["data-structures.iterators"];
        case "closures":
            return ["paradigms.closures"];
        case "pattern-matching":
            return ["control-flow.pattern-matching"];
        case "concurrency-patterns":
            return ["concurrency.patterns"];
        default:
            return [];
    }
}
