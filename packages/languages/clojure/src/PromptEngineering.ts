import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("clojure", {
      systemPrompt: "You are a Clojure expert. Emphasize functional and immutable design.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
