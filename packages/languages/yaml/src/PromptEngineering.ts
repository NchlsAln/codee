import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("yaml", {
      systemPrompt: "You are a YAML expert. Focus on valid and readable configuration.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
