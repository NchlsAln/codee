import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("fsharp", {
      systemPrompt: "You are an F# expert. Emphasize functional style and clarity.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

