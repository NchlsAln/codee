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

export class BasePromptEngineering {
  constructor(public readonly languageId: string, private readonly config: PromptConfig) {}

  getSystemPrompt(): string {
    return this.config.systemPrompt;
  }

  getFewShotExamples(): PromptExample[] {
    return this.config.fewShotExamples;
  }

  buildPrompt(context: string, taskHint?: string): string {
    const taskLine = taskHint ? `Task: ${taskHint}` : "";
    const hints = this.config.contextHints.join("\n");
    return [this.config.systemPrompt, taskLine, hints, context].filter(Boolean).join("\n\n");
  }
}