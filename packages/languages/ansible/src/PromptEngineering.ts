import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("ansible", {
      systemPrompt: "You are an Ansible expert. Focus on idempotence and readability.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
