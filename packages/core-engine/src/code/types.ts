export interface LSPConfiguration {
  command: string;
  args?: string[];
  settings?: Record<string, unknown>;
}

export type TemplateLibrary = {
  systemPrompt: string;
  completionPrompt: string;
  refactorPrompt: string;
  testPrompt: string;
};

export interface ILanguageSupport {
  id: string;
  name: string;
  extensions: string[];
  treeSitterGrammar: string;
  lspConfig?: LSPConfiguration;
  generationTemplates: TemplateLibrary;
}
