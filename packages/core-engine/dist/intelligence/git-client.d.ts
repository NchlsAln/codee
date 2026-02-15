export interface GitClient {
    isGitRepo(): Promise<boolean>;
    diffPaths(paths: string[]): Promise<string>;
    diffText(before: string, after: string, filePath: string): Promise<string>;
    checkout(paths: string[]): Promise<void>;
}
export declare class NodeGitClient implements GitClient {
    private readonly projectRoot;
    constructor(projectRoot: string);
    isGitRepo(): Promise<boolean>;
    diffPaths(paths: string[]): Promise<string>;
    diffText(before: string, after: string, filePath: string): Promise<string>;
    checkout(paths: string[]): Promise<void>;
    private execGit;
}
