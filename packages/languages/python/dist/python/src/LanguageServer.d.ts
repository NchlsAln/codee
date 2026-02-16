import { BaseLanguageServer } from "@codee/lang-common";
export interface PythonToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: PythonToolingConfig;
    constructor(projectPath?: string);
}
