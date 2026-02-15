import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("objective-c", {
      systemPrompt: "You are an Objective-C expert. Use clear naming and Cocoa conventions.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
