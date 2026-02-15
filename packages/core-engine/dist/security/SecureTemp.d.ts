export declare function createSecureTempDir(prefix: string): Promise<{
    path: string;
    cleanup: () => Promise<void>;
}>;
