import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("ruby", {
      systemPrompt: "You are a Ruby expert. Use expressive, idiomatic Ruby patterns.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
