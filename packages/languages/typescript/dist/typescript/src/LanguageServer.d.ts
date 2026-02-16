import { BaseLanguageServer } from "@codee/lang-common";
export interface TypeScriptToolingConfig {
    formatter: string;
    linter: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: TypeScriptToolingConfig;
    constructor(projectPath?: string);
}
