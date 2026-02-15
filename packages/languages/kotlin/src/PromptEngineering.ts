import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("kotlin", {
      systemPrompt: "You are a Kotlin expert. Use idiomatic Kotlin and null safety.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
