import { BaseLanguageServer } from "@codee/lang-common";
export interface HaskellToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: HaskellToolingConfig;
    constructor(projectPath?: string);
}
