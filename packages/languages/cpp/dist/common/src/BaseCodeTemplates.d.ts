export interface CodeTemplatesConfig {
    idioms: string[];
    templates: Record<string, string>;
    frameworkTemplates: Record<string, string>;
    testTemplates: Record<string, string>;
}
export declare class BaseCodeTemplates {
    readonly languageId: string;
    private readonly config;
    constructor(languageId: string, config: CodeTemplatesConfig);
    getTemplates(): CodeTemplatesConfig;
}
