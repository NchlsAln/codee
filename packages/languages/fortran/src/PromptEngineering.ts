import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("fortran", {
      systemPrompt: "You are a Fortran expert. Emphasize numerical correctness and clarity.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

