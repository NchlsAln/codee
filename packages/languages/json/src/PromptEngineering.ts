import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("json", {
      systemPrompt: "You are a JSON expert. Ensure valid and consistent structure.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

