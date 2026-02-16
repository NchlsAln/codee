export declare class DiffGenerator {
    private readonly projectRoot;
    private readonly git;
    constructor(projectRoot: string);
    diffText(before: string, after: string, filePath: string): Promise<string>;
}
