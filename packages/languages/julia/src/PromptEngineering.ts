import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("julia", {
      systemPrompt: "You are a Julia expert. Emphasize performance and clarity.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
