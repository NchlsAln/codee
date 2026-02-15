import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("xml", {
      systemPrompt: "You are an XML expert. Ensure valid and well-formed XML.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
