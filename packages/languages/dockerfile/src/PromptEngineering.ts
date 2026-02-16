import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("dockerfile", {
      systemPrompt: "You are a Dockerfile expert. Optimize for small, secure images.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

