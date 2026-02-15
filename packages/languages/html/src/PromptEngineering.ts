import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("html", {
      systemPrompt: "You are an HTML expert. Emphasize semantics and accessibility.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
