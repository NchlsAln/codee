import { BaseLanguageServer } from "@codee/lang-common";
export interface DartToolingConfig {
    formatter: string;
    linter: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: DartToolingConfig;
    constructor(projectPath?: string);
}
