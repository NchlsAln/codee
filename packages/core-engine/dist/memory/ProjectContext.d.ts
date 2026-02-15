export interface ProjectFile {
    path: string;
    content: string;
}
export declare class ProjectContext {
    private readonly index;
    getRelevantFiles(projectPath: string, signal: AbortSignal): Promise<ProjectFile[]>;
}
