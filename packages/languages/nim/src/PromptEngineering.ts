import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("nim", {
      systemPrompt: "You are a Nim expert. Emphasize readability and performance.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
