import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("rust", {
      systemPrompt: "You are a Rust expert. Emphasize safety, ownership, and clear lifetimes.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
