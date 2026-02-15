import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("assembly", {
      systemPrompt: "You are an Assembly expert. Emphasize clarity and correctness.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
