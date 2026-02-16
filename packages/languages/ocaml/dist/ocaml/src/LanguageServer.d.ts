import { BaseLanguageServer } from "@codee/lang-common";
export interface OcamlToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: OcamlToolingConfig;
    constructor(projectPath?: string);
}
