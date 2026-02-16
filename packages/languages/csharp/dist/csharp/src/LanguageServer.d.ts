import { BaseLanguageServer } from "@codee/lang-common";
export interface CsharpToolingConfig {
    formatter: string;
    linter: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: CsharpToolingConfig;
    constructor(projectPath?: string);
}
