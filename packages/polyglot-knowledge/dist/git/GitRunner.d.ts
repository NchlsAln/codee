export declare class GitRunner {
    private readonly projectRoot;
    constructor(projectRoot: string);
    isGitRepo(): Promise<boolean>;
    isClean(): Promise<boolean>;
    exec(args: string[]): Promise<string>;
}
