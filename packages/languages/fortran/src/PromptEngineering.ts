import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("fortran", {
      systemPrompt: "You are a Fortran expert. Emphasize numerical correctness and clarity.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
