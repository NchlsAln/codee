import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("terraform", {
      systemPrompt: "You are a Terraform expert. Emphasize safe, reusable infrastructure code.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
