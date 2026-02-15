import { FileSystem } from "./file-system";
import { CorrectionRecord } from "./types";
export declare class CorrectionStore {
    private readonly projectRoot;
    private readonly fileSystem;
    private readonly filePath;
    constructor(projectRoot: string, fileSystem?: FileSystem);
    list(): Promise<CorrectionRecord[]>;
    record(entry: CorrectionRecord): Promise<void>;
}
