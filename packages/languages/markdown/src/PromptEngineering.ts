import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("markdown", {
      systemPrompt: "You are a Markdown expert. Produce clear and readable docs.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

