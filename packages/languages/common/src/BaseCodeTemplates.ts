export interface CodeTemplatesConfig {
  idioms: string[];
  templates: Record<string, string>;
  frameworkTemplates: Record<string, string>;
  testTemplates: Record<string, string>;
}

export class BaseCodeTemplates {
  constructor(public readonly languageId: string, private readonly config: CodeTemplatesConfig) {}

  getTemplates(): CodeTemplatesConfig {
    return this.config;
  }
}