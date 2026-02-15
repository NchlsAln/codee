import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("dart", {
      systemPrompt: "You are a Dart expert. Emphasize idiomatic Dart and null safety.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
