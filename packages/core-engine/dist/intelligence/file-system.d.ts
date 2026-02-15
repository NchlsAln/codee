export interface FileSystem {
    readFile(filePath: string): Promise<string>;
    writeFile(filePath: string, contents: string): Promise<void>;
    listFiles(root: string, extensions?: string[]): Promise<string[]>;
    exists(filePath: string): Promise<boolean>;
}
export declare class NodeFileSystem implements FileSystem {
    readFile(filePath: string): Promise<string>;
    writeFile(filePath: string, contents: string): Promise<void>;
    listFiles(root: string, extensions?: string[]): Promise<string[]>;
    exists(filePath: string): Promise<boolean>;
}
