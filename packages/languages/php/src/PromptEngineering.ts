import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("php", {
      systemPrompt: "You are a PHP expert. Favor modern PHP 8+ practices and clarity.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
