import { BaseLanguageServer } from "@codee/lang-common";
export interface SqlToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: SqlToolingConfig;
    constructor(projectPath?: string);
}
