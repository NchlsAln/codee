import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("ansible", {
      systemPrompt: "You are an Ansible expert. Focus on idempotence and readability.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}

