import { LanguageRegistry } from "@codee/lang-common";
export { LanguageRegistry } from "@codee/lang-common";
export type { LanguageDefinition } from "@codee/lang-common";
export type { AnalyzerResult, CodeSmell, CompletionItem, ComplexityMetrics, DefinitionLocation, Diagnostic, DiagnosticSeverity, HoverInfo, ImportInfo, LanguageServerStatus, SymbolInfo } from "@codee/lang-common";
export { typescriptDefinition } from "@codee/lang-typescript";
export { pythonDefinition } from "@codee/lang-python";
export declare function registerDefaultLanguages(registry: LanguageRegistry): void;
