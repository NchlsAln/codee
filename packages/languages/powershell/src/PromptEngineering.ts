import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("powershell", {
      systemPrompt: "You are a PowerShell expert. Use idiomatic cmdlets and pipeline patterns.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
