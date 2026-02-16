import { BaseLanguageServer } from "@codee/lang-common";
export interface ScalaToolingConfig {
    formatter: string;
    linter: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: ScalaToolingConfig;
    constructor(projectPath?: string);
}
