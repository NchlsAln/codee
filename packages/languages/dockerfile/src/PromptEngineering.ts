import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("dockerfile", {
      systemPrompt: "You are a Dockerfile expert. Optimize for small, secure images.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
