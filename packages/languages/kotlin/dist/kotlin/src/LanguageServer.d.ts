import { BaseLanguageServer } from "@codee/lang-common";
export interface KotlinToolingConfig {
    formatter: string;
    linter: string;
    codeActions: string[];
}
export declare class LanguageServer extends BaseLanguageServer {
    readonly tooling: KotlinToolingConfig;
    constructor(projectPath?: string);
}
