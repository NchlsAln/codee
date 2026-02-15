import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("bash", {
      systemPrompt: "You are a Bash expert. Emphasize safety and portability.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
