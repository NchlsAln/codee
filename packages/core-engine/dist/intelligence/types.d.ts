export type ApprovalState = "pending" | "approved" | "rejected";
export interface ConfidenceScore {
    score: number;
    rationale: string;
}
export interface FileEdit {
    filePath: string;
    before: string;
    after: string;
}
export interface ChangeSet {
    edits: FileEdit[];
    warnings: string[];
}
export interface ChangeSetResult {
    applied: boolean;
    rolledBack: boolean;
    diff: string;
}
export interface RefactorResult {
    changeSet: ChangeSet;
    previewDiff: string;
    confidence: ConfidenceScore;
    requiresApproval: boolean;
}
export interface RenameSymbolPlan {
    symbolName: string;
    newName: string;
    extensions?: string[];
}
export interface ExtractToNewFilePlan {
    sourceFile: string;
    selectionStart: number;
    selectionEnd: number;
    newFile: string;
    exportName: string;
}
export interface MoveClassPlan {
    sourceFile: string;
    className: string;
    newFile: string;
}
export interface ChangeSignaturePlan {
    sourceFile: string;
    functionName: string;
    newParameters: string[];
}
export interface TestGenerationPlan {
    source: string;
    language: "typescript" | "javascript" | "python";
    framework?: "jest" | "vitest" | "pytest";
    fileName?: string;
}
export interface GeneratedTestFile {
    filePath: string;
    contents: string;
}
export interface TestSuiteResult {
    files: GeneratedTestFile[];
    notes: string[];
    confidence: ConfidenceScore;
}
export interface ArchitectureReport {
    summary: string;
    components: string[];
    dependencies: string[];
    risks: string[];
    suggestions: string[];
    confidence: ConfidenceScore;
}
export interface DocumentationBundle {
    readme: string;
    apiDoc: string;
    changelog: string;
    confidence: ConfidenceScore;
}
export interface NL2CPlan {
    steps: string[];
    skeleton: string;
    warnings: string[];
    confidence: ConfidenceScore;
}
export interface CorrectionRecord {
    prompt: string;
    before: string;
    after: string;
    reason: string;
    timestamp: string;
}
