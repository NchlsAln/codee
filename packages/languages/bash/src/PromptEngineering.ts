import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("bash", {
      systemPrompt: "You are a Bash expert. Emphasize safety and portability.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

