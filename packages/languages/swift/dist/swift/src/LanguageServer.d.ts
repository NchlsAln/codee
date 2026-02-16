import { BaseLanguageServer } from "@codee/lang-common";
export interface SwiftToolingConfig {
    formatter: string;
    linter: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: SwiftToolingConfig;
    constructor(projectPath?: string);
}
