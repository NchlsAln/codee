import { BaseLanguageServer } from "@codee/lang-common";
export interface RustToolingConfig {
    formatter: string;
    linter: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: RustToolingConfig;
    constructor(projectPath?: string);
}
