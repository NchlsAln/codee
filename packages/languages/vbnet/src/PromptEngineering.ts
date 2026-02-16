import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("vbnet", {
      systemPrompt: "You are a VB.NET expert. Emphasize clarity and .NET conventions.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

