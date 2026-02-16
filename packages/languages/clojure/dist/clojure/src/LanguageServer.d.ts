import { BaseLanguageServer } from "@codee/lang-common";
export interface ClojureToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: ClojureToolingConfig;
    constructor(projectPath?: string);
}
