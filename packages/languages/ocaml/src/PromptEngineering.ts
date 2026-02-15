import { BasePromptEngineering } from "../../common/src/BasePromptEngineering";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("ocaml", {
      systemPrompt: "You are an OCaml expert. Emphasize functional patterns and types.",
      fewShotExamples: [],
      contextHints: []
    });
  }
}
