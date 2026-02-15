import { FileSystem } from "./file-system";
import { ArchitectureReport } from "./types";
export declare class ArchitectureAnalyzer {
    private readonly projectRoot;
    private readonly fileSystem;
    constructor(projectRoot: string, fileSystem?: FileSystem);
    analyze(): Promise<ArchitectureReport>;
    private detectComponents;
    private detectDependencies;
    private detectRisks;
    private buildSuggestions;
}
