import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("html", {
      systemPrompt: "You are an HTML expert. Emphasize semantics and accessibility.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

