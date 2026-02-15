import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("crystal", {
      systemPrompt: "You are a Crystal expert. Emphasize clarity and Ruby-like ergonomics.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
