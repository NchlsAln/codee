import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("elixir", {
      systemPrompt: "You are an Elixir expert. Emphasize functional style and OTP patterns.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
