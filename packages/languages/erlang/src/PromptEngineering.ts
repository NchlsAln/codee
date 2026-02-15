import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("erlang", {
      systemPrompt: "You are an Erlang expert. Emphasize OTP and robust concurrency.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
