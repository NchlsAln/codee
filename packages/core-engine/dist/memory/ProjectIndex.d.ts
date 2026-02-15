import { EventEmitter } from "events";
export interface FileMetadata {
    path: string;
    languageId: string;
    size: number;
    lastModified: number;
}
export interface DependencyEdge {
    from: string;
    to: string;
    type: "import" | "require" | "include";
}
export interface ProjectIndexSnapshot {
    root: string;
    files: FileMetadata[];
    dependencies: DependencyEdge[];
}
export declare class ProjectIndex extends EventEmitter {
    private readonly files;
    private readonly dependencies;
    private readonly dependenciesByFile;
    private watcher;
    constructor();
    scan(projectPath: string, options?: {
        signal?: AbortSignal;
    }): Promise<void>;
    ensureFile(filePath: string): Promise<void>;
    getSnapshot(projectPath: string): ProjectIndexSnapshot;
    getFileMetadata(filePath: string): FileMetadata | undefined;
    listFiles(): FileMetadata[];
    getFileContent(filePath: string): Promise<string>;
    watch(projectPath: string): void;
    stopWatching(): Promise<void>;
    private onFileChanged;
    private onFileRemoved;
    private walk;
    private buildMetadata;
    private detectLanguage;
    private rebuildDependencies;
    private updateDependenciesForFile;
    private refreshDependencies;
    private extractDependencies;
}
