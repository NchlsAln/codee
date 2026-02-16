import { concurrencyPatterns } from "./concepts/concurrency/patterns";
import { collectionConcepts } from "./concepts/data-structures/collections";
import { memoryLayoutConcepts } from "./concepts/data-structures/memory-layout";
import { iteratorConcepts } from "./concepts/data-structures/iterators";
import { asyncPatterns } from "./concepts/control-flow/async-patterns";
import { errorHandlingConcepts } from "./concepts/control-flow/error-handling";
import { patternMatchingConcepts } from "./concepts/control-flow/pattern-matching";
import { oopConcepts } from "./concepts/paradigms/oop";
import { functionalConcepts } from "./concepts/paradigms/functional";
import { proceduralConcepts } from "./concepts/paradigms/procedural";
import { genericsConcepts } from "./concepts/paradigms/generics";
import { closureConcepts } from "./concepts/paradigms/closures";
import { pythonToTypeScript } from "./mappings/python/to-typescript";
import { pythonToRust } from "./mappings/python/to-rust";
import { typescriptToPython } from "./mappings/typescript/to-python";
import { typescriptToRust } from "./mappings/typescript/to-rust";
import { detectPatterns } from "./analysis/pattern-detector";
import { translateWithEngine } from "./engine/translation-engine";
import { translateWithFallback } from "./mappings/shared/mapping-helpers";
import { conceptImplementations } from "./implementations";
import {
  LanguageId,
  TranslationOptions,
  TranslationResult,
  ConceptDefinition,
  ConceptImplementation,
  PatternMatch
} from "./types";

export * from "./types";
export * from "./validators/type-equivalence";
export * from "./validators/behavior-preservation";
export * from "./validators/performance-comparison";
export * from "./validators/behavioral-tests";
export * from "./validators/behavioral-validator";
export * from "./validators/performance-validator";
export * from "./validators/syntax-validator";
export * from "./validators/scale-validation";
export * from "./templates/api-design/rest-endpoint";
export * from "./templates/api-design/graphql-resolver";
export * from "./templates/algorithms/sorting";
export * from "./templates/algorithms/graph-traversal";
export * from "./templates/design-patterns/singleton";
export * from "./templates/design-patterns/factory";
export * from "./templates/design-patterns/observer";
export * from "./templates/design-patterns/strategy";
export * from "./concepts/core-concepts";
export * from "./concepts/coverage-matrix";
export * from "./mappings/python/to-typescript";
export * from "./mappings/python/to-rust";
export * from "./mappings/python/to-go";
export * from "./mappings/typescript/to-python";
export * from "./mappings/typescript/to-rust";
export * from "./mappings/typescript/to-go";
export * from "./mappings/rust/to-python";
export * from "./mappings/rust/to-typescript";
export * from "./mappings/rust/to-go";
export * from "./mappings/go/to-python";
export * from "./mappings/go/to-typescript";
export * from "./mappings/go/to-rust";
export * from "./mappings/java/to-python";
export * from "./mappings/java/to-typescript";
export * from "./mappings/java/to-rust";
export * from "./mappings/java/to-go";
export * from "./mappings/java/to-cpp";
export * from "./mappings/java/from-python";
export * from "./mappings/java/from-typescript";
export * from "./mappings/java/from-rust";
export * from "./mappings/java/from-go";
export * from "./mappings/cpp/to-python";
export * from "./mappings/cpp/to-typescript";
export * from "./mappings/cpp/to-rust";
export * from "./mappings/cpp/to-go";
export * from "./mappings/cpp/to-java";
export * from "./mappings/cpp/from-python";
export * from "./mappings/cpp/from-typescript";
export * from "./mappings/cpp/from-rust";
export * from "./mappings/cpp/from-go";
export * from "./mappings/kotlin/to-python";
export * from "./mappings/kotlin/to-typescript";
export * from "./mappings/kotlin/to-rust";
export * from "./mappings/scala/to-python";
export * from "./mappings/scala/to-typescript";
export * from "./mappings/scala/to-rust";
export * from "./mappings/csharp/to-python";
export * from "./mappings/csharp/to-typescript";
export * from "./mappings/csharp/to-rust";
export * from "./mappings/swift/to-python";
export * from "./mappings/swift/to-typescript";
export * from "./mappings/swift/to-rust";
export * from "./mappings/dart/to-python";
export * from "./mappings/dart/to-typescript";
export * from "./mappings/dart/to-rust";
export * from "./analysis/pattern-detector";
export * from "./engine/translation-engine";
export * from "./engine/multi-file";
export * from "./git";
export * from "./implementations";
export * from "./validators/integration-tests/types";
export * from "./validators/integration-tests/kotlin";
export * from "./validators/integration-tests/scala";
export * from "./validators/integration-tests/csharp";
export * from "./validators/integration-tests/swift";
export * from "./validators/integration-tests/dart";
export { ProjectAnalyzer } from "./engine/multi-file/ProjectAnalyzer";
export { BatchTranslator } from "./engine/multi-file/BatchTranslator";
export { TypeRegistry } from "./engine/multi-file/TypeRegistry";
export { TranslationGit } from "./git/TranslationGit";
export { TranslationSafety } from "./safety/TranslationSafety";

export function listConcepts(): ConceptDefinition[] {
  return [
    ...concurrencyPatterns,
    ...collectionConcepts,
    ...iteratorConcepts,
    ...memoryLayoutConcepts,
    ...asyncPatterns,
    ...errorHandlingConcepts,
    ...patternMatchingConcepts,
    ...oopConcepts,
    ...functionalConcepts,
    ...genericsConcepts,
    ...closureConcepts,
    ...proceduralConcepts
  ];
}

export function extractConceptsFromCode(code: string): string[] {
  const matches = detectPatterns(code, "python")
    .concat(detectPatterns(code, "typescript"))
    .concat(detectPatterns(code, "rust"))
    .concat(detectPatterns(code, "go"))
    .concat(detectPatterns(code, "java"))
    .concat(detectPatterns(code, "cpp"));
  const concepts = matches.flatMap((match) => mapPatternToConcept(match));
  return Array.from(new Set(concepts));
}

export function translateCode(
  from: LanguageId,
  to: LanguageId,
  code: string,
  options?: TranslationOptions
): TranslationResult {
  const supported = new Set<LanguageId>([
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
    return translateWithFallback(from, to, code, options);
  }

  if (
    (from === "python" && (to === "typescript" || to === "rust" || to === "go")) ||
    (from === "typescript" && (to === "python" || to === "rust" || to === "go")) ||
    (from === "rust" && (to === "python" || to === "typescript" || to === "go")) ||
    (from === "go" && (to === "python" || to === "typescript" || to === "rust")) ||
    (from === "java" && (to === "python" || to === "typescript" || to === "rust" || to === "go" || to === "cpp")) ||
    (from === "cpp" && (to === "python" || to === "typescript" || to === "rust" || to === "go" || to === "java")) ||
    (to === "java" && (from === "python" || from === "typescript" || from === "rust" || from === "go" || from === "cpp")) ||
    (to === "cpp" && (from === "python" || from === "typescript" || from === "rust" || from === "go" || from === "java"))
  ) {
    return translateWithEngine(from, to, code, options);
  }
  if (from === "python" && to === "typescript") {
    return pythonToTypeScript(code);
  }
  if (from === "python" && to === "rust") {
    return pythonToRust(code);
  }
  if (from === "typescript" && to === "python") {
    return typescriptToPython(code);
  }
  if (from === "typescript" && to === "rust") {
    return typescriptToRust(code);
  }
  return {
    output: `// TODO: Translation not implemented for ${from} -> ${to}.\n${code}`,
    concepts: extractConceptsFromCode(code),
    notes: ["Fallback translation path."]
  };
}

export function listConceptImplementations(): Record<string, ConceptImplementation[]> {
  return conceptImplementations;
}

export function detectPatternMatches(code: string, language: LanguageId): PatternMatch[] {
  return detectPatterns(code, language);
}

function mapPatternToConcept(match: PatternMatch): string[] {
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
