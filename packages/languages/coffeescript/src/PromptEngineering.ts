import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("coffeescript", {
      systemPrompt: "You are a CoffeeScript expert. Emphasize readable, idiomatic code.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

