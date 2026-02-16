import { BaseLanguageServer } from "@codee/lang-common";
export interface CrystalToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: CrystalToolingConfig;
    constructor(projectPath?: string);
}
