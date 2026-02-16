import { BaseLanguageServer } from "@codee/lang-common";
export interface PhpToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: PhpToolingConfig;
    constructor(projectPath?: string);
}
