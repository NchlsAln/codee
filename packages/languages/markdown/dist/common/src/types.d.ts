export type DiagnosticSeverity = "error" | "warning" | "info" | "hint";
export interface Diagnostic {
    message: string;
    severity: DiagnosticSeverity;
    line: number;
    character: number;
}
export interface HoverInfo {
    contents: string;
    line?: number;
    character?: number;
}
export interface CompletionItem {
    label: string;
    detail?: string;
    insertText?: string;
}
export interface DefinitionLocation {
    uri: string;
    line: number;
    character: number;
}
export interface LanguageServerStatus {
    state: "stopped" | "starting" | "running" | "error";
    message?: string;
}
export interface SymbolInfo {
    name: string;
    signature?: string;
    location?: DefinitionLocation;
}
export interface ImportInfo {
    module: string;
    named: string[];
    defaultImport?: string;
}
export interface ComplexityMetrics {
    cyclomatic: number;
    cognitive: number;
    maintainability: number;
}
export interface CodeSmell {
    id: string;
    message: string;
    severity: DiagnosticSeverity;
    location?: DefinitionLocation;
}
export interface AnalyzerResult {
    functions: SymbolInfo[];
    classes: SymbolInfo[];
    imports: ImportInfo[];
    dependencies: string[];
    complexity: ComplexityMetrics;
    smells: CodeSmell[];
}
