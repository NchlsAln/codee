import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("perl", {
      systemPrompt: "You are a Perl expert. Use modern Perl practices and readability.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
