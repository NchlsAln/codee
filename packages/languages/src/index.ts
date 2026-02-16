import { LanguageRegistry, ALL_LANGUAGES, registerAllLanguages } from "@codee/lang-common";

export { LanguageRegistry, ALL_LANGUAGES, registerAllLanguages } from "@codee/lang-common";
export type { LanguageDefinition } from "@codee/lang-common";
export type {
  AnalyzerResult,
  CodeSmell,
  CompletionItem,
  ComplexityMetrics,
  DefinitionLocation,
  Diagnostic,
  DiagnosticSeverity,
  HoverInfo,
  ImportInfo,
  LanguageServerStatus,
  SymbolInfo
} from "@codee/lang-common";
export { typescriptDefinition } from "@codee/lang-typescript";
export { pythonDefinition } from "@codee/lang-python";
export { rustDefinition } from "@codee/lang-rust";
export { goDefinition } from "@codee/lang-go";
export { javaDefinition } from "@codee/lang-java";
export { cppDefinition } from "@codee/lang-cpp";

export function registerDefaultLanguages(registry: LanguageRegistry): void {
  registerAllLanguages(registry);
}
