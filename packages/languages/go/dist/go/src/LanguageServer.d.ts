import { BaseLanguageServer } from "@codee/lang-common";
export interface GoToolingConfig {
    formatter: string;
    linter: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: GoToolingConfig;
    constructor(projectPath?: string);
}
