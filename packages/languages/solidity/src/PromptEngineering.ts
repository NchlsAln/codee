import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("solidity", {
      systemPrompt: "You are a Solidity expert. Emphasize security and correctness.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

