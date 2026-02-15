import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("markdown", {
      systemPrompt: "You are a Markdown expert. Produce clear and readable docs.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
