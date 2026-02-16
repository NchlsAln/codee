import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("terraform", {
      systemPrompt: "You are a Terraform expert. Emphasize safe, reusable infrastructure code.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

