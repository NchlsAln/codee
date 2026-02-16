import type { LanguageId } from "./language-ids";
export { ALL_LANGUAGE_IDS } from "./language-ids";
export type { LanguageId } from "./language-ids";
export type ConceptCategory = "concurrency" | "data-structures" | "control-flow" | "paradigms";
export interface ConceptDefinition {
    id: string;
    name: string;
    category: ConceptCategory;
    description: string;
    tags: string[];
}
export interface ConceptImplementation {
    language: LanguageId;
    description: string;
    snippet: string;
}
export interface ConceptMappingRule {
    conceptId: string;
    from: LanguageId;
    to: LanguageId;
    steps: string[];
}
export type PatternId = "list-comprehension" | "decorator" | "async-await" | "dataclass" | "error-handling" | "dict-literal" | "none-handling" | "generics" | "iterators" | "closures" | "pattern-matching" | "concurrency-patterns";
export interface PatternMatch {
    id: PatternId;
    language: LanguageId;
    confidence: number;
    parameters: Record<string, string>;
    notes?: string[];
}
export interface TranslationDecision {
    id: string;
    prompt: string;
    options: string[];
    defaultOption: string;
}
export interface TranslationOptions {
    decisions?: Record<string, string>;
    showSteps?: boolean;
}
export interface TranslationResult {
    output: string;
    concepts: string[];
    notes: string[];
    patterns?: PatternMatch[];
    warnings?: string[];
    decisions?: TranslationDecision[];
    steps?: string[];
    confidence?: number;
}
export interface ValidationResult {
    ok: boolean;
    details: string[];
}
export type TranslationStatus = "auto" | "review" | "skip";
export interface ASTNode {
    type: string;
    name?: string;
    value?: string;
    children?: ASTNode[];
}
export interface ConceptMapping {
    concept: string;
    sourceLanguage: LanguageId;
    targetLanguage: LanguageId;
    confidence: number;
    transform: (ast: ASTNode) => ASTNode;
}
export interface SharedType {
    name: string;
    sourceLanguage: LanguageId;
    definition: ASTNode;
    targetDefinitions: Map<string, string>;
}
export interface Import {
    source: string;
    symbols: string[];
    isExternal: boolean;
}
export interface Export {
    name: string;
    type: string;
}
export interface Module {
    name: string;
    path: string;
    files: string[];
}
export type DependencyGraph = Record<string, string[]>;
export interface SourceFile {
    path: string;
    language: LanguageId;
    content: string;
    ast: ASTNode;
    imports: Import[];
    exports: Export[];
    translationComplexity: "simple" | "moderate" | "complex";
}
export interface ProjectStructure {
    rootPath: string;
    files: SourceFile[];
    entryPoints: string[];
    modules: Module[];
    dependencies: DependencyGraph;
    externalDeps: string[];
}
export type TranslationJobStatus = "pending" | "translating" | "done" | "failed";
export interface TranslatedFile {
    originalPath: string;
    targetPath: string;
    content: string;
    warnings: string[];
    confidence: number;
}
export interface TranslationJob {
    sourceFile: SourceFile;
    targetLanguage: LanguageId;
    priority: number;
    status: TranslationJobStatus;
    result?: TranslatedFile;
    error?: string;
}
export interface ProjectTranslationResult {
    rootPath: string;
    targetLanguage: LanguageId;
    files: TranslatedFile[];
    completed: number;
    failed: number;
    warnings: string[];
}
export interface TranslationStats {
    sourceLanguage: LanguageId;
    targetLanguage: LanguageId;
    successful: number;
    warnings: number;
    failed: number;
}
export interface PreCheckResult {
    gitClean: boolean;
    testsPassing: boolean | null;
    fileCount: number;
    warnings: string[];
}
export interface PostCheckResult {
    ok: boolean;
    errors: Array<{
        filePath: string;
        details: string[];
    }>;
    suggestions: string[];
}
export interface ProjectFile {
    path: string;
    language: LanguageId;
    size: number;
    lineCount: number;
    dependencies: string[];
}
export interface TranslationBoundary {
    filePath: string;
    status: TranslationStatus;
    reason: string;
}
export type ProjectAnalysis = ProjectStructure;
export interface TypeDefinition {
    name: string;
    kind: "class" | "interface" | "enum" | "struct";
    language: LanguageId;
    sourceFile: string;
}
export interface BatchTranslationOptions {
    projectRoot: string;
    from: LanguageId;
    to: LanguageId;
    outputRoot: string;
    basePackage?: string;
    namespace?: string;
    onProgress?: (message: string, current: number, total: number) => void;
}
export interface TranslationFileResult {
    sourcePath: string;
    targetPath: string;
    status: TranslationStatus;
    output: string;
    notes: string[];
    warnings: string[];
    confidence: number;
}
export interface BatchTranslationResult {
    analysis: ProjectAnalysis;
    files: TranslationFileResult[];
    translatedCount: number;
    reviewCount: number;
    skippedCount: number;
    notes: string[];
}
