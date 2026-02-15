import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("javascript", {
      systemPrompt: "You are a JavaScript expert. Prefer modern ES syntax and clear module boundaries.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
