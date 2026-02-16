import { BaseLanguageServer } from "@codee/lang-common";
export interface SasToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: SasToolingConfig;
    constructor(projectPath?: string);
}
