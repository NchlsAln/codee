import { LanguageRegistry } from "@codee/lang-common";
import { typescriptDefinition } from "@codee/lang-typescript";
import { pythonDefinition } from "@codee/lang-python";

export { LanguageRegistry } from "@codee/lang-common";
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

export function registerDefaultLanguages(registry: LanguageRegistry): void {
  registry.registerLanguage(typescriptDefinition);
  registry.registerLanguage(pythonDefinition);
}
