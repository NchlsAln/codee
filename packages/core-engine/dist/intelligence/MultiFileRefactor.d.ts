import { FileSystem } from "./file-system";
import { GitClient } from "./git-client";
import { ChangeSet, ChangeSetResult, ChangeSignaturePlan, ExtractToNewFilePlan, MoveClassPlan, RefactorResult, RenameSymbolPlan } from "./types";
export declare class MultiFileRefactor {
    private readonly projectRoot;
    private readonly fileSystem;
    private readonly gitClient;
    constructor(projectRoot: string, fileSystem?: FileSystem, gitClient?: GitClient);
    renameSymbol(plan: RenameSymbolPlan): Promise<RefactorResult>;
    extractToNewFile(plan: ExtractToNewFilePlan): Promise<RefactorResult>;
    moveClass(plan: MoveClassPlan): Promise<RefactorResult>;
    changeFunctionSignature(plan: ChangeSignaturePlan): Promise<RefactorResult>;
    applyChangeSet(changeSet: ChangeSet, approved: boolean): Promise<ChangeSetResult>;
    rollbackChangeSet(changeSet: ChangeSet): Promise<ChangeSetResult>;
    private buildResult;
    private buildPreviewDiff;
    private estimateConfidence;
}
