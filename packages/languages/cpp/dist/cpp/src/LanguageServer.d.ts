import { BaseLanguageServer } from "@codee/lang-common";
export interface CppToolingConfig {
    formatter: string;
    linter: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: CppToolingConfig;
    constructor(projectPath?: string);
}
