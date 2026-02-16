import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("perl", {
      systemPrompt: "You are a Perl expert. Use modern Perl practices and readability.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

