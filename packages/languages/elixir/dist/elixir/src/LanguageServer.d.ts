import { BaseLanguageServer } from "@codee/lang-common";
export interface ElixirToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: ElixirToolingConfig;
    constructor(projectPath?: string);
}
