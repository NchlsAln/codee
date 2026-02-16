import { LanguageRegistry } from "@codee/lang-common";
import { LanguageId, ProjectStructure } from "../../types";
export declare class ProjectAnalyzer {
    private readonly projectRoot?;
    private readonly registry?;
    constructor(projectRoot?: string | undefined, registry?: LanguageRegistry | undefined);
    analyze(projectPath: string, languageFilter?: LanguageId): Promise<ProjectStructure>;
    private detectLanguage;
    private isSupportedLanguage;
    private discoverSourceFiles;
    private parseFiles;
    private buildFileIndex;
    private buildDependencyGraph;
    private findCycles;
    private resolveImport;
    private expandImportCandidates;
    private detectEntryPoints;
    private detectModules;
    private collectExternalDeps;
    private extractImports;
    private extractExports;
    private buildAst;
    private scoreComplexity;
    private splitSymbols;
    private loadIgnoreMatchers;
    private compileIgnore;
}
