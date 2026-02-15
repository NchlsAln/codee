import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("groovy", {
      systemPrompt: "You are a Groovy expert. Use concise, readable Groovy code.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
