import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("assembly", {
      systemPrompt: "You are an Assembly expert. Emphasize clarity and correctness.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

