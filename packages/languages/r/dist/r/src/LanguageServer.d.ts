import { BaseLanguageServer } from "@codee/lang-common";
export interface RToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: RToolingConfig;
    constructor(projectPath?: string);
}
