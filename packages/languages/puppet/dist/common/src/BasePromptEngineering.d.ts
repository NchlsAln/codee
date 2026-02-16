export interface PromptExample {
  task: string;
  input: string;
  output: string;
}
export interface PromptConfig {
  systemPrompt: string;
  fewShotExamples: PromptExample[];
  contextHints: string[];
}
export declare class BasePromptEngineering {
  readonly languageId: string;
  private readonly config;
  constructor(languageId: string, config: PromptConfig);
  getSystemPrompt(): string;
  getFewShotExamples(): PromptExample[];
  buildPrompt(context: string, taskHint?: string): string;
}
