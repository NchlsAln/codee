import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("json", {
      systemPrompt: "You are a JSON expert. Ensure valid and consistent structure.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
