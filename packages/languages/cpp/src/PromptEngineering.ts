import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("cpp", {
      systemPrompt: "You are a C++ expert. Favor modern, safe, and efficient patterns.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
