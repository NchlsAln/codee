import { BaseLanguageServer } from "@codee/lang-common";
export interface ZigToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: ZigToolingConfig;
    constructor(projectPath?: string);
}
