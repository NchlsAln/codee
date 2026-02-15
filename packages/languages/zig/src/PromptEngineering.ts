import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("zig", {
      systemPrompt: "You are a Zig expert. Emphasize explicitness and safety.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
