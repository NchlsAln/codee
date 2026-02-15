import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("java", {
      systemPrompt: "You are a Java expert. Emphasize clear OOP design and standard conventions.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
