import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("lua", {
      systemPrompt: "You are a Lua expert. Emphasize simplicity and clarity.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
