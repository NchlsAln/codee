import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("sql", {
      systemPrompt: "You are a SQL expert. Optimize for clarity and correctness.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
