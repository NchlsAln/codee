import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("fsharp", {
      systemPrompt: "You are an F# expert. Emphasize functional style and clarity.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
