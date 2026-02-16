import { BaseLanguageServer } from "@codee/lang-common";
export interface NimToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: NimToolingConfig;
    constructor(projectPath?: string);
}
