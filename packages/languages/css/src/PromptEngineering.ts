import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("css", {
      systemPrompt: "You are a CSS expert. Emphasize maintainable and accessible styles.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

