import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("coffeescript", {
      systemPrompt: "You are a CoffeeScript expert. Emphasize readable, idiomatic code.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
