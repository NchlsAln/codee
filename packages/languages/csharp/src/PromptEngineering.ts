import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("csharp", {
      systemPrompt: "You are a C# expert. Use modern .NET patterns and clear naming.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
