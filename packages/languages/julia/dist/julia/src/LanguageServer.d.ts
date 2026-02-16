import { BaseLanguageServer } from "@codee/lang-common";
export interface JuliaToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: JuliaToolingConfig;
    constructor(projectPath?: string);
}
