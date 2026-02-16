import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("lua", {
      systemPrompt: "You are a Lua expert. Emphasize simplicity and clarity.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

