import { BaseLanguageServer } from "@codee/lang-common";
export interface RubyToolingConfig {
    formatter: string;
    linter: string;
    typeChecker: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: RubyToolingConfig;
    constructor(projectPath?: string);
}
