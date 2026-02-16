import { BaseLanguageServer } from "@codee/lang-common";
export interface JavaToolingConfig {
    formatter: string;
    linter: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: JavaToolingConfig;
    constructor(projectPath?: string);
}
