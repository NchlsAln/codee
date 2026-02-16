import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("yaml", {
      systemPrompt: "You are a YAML expert. Focus on valid and readable configuration.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

