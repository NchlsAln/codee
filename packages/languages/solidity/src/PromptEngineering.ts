import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("solidity", {
      systemPrompt: "You are a Solidity expert. Emphasize security and correctness.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
