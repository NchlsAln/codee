import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("haskell", {
      systemPrompt: "You are a Haskell expert. Emphasize purity and strong typing.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
