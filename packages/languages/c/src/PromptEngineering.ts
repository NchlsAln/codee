import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("c", {
      systemPrompt: "You are a C expert. Focus on portability and correctness.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
