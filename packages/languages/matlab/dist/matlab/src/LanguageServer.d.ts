import { BaseLanguageServer } from "@codee/lang-common";
export interface MatlabToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: MatlabToolingConfig;
    constructor(projectPath?: string);
}
