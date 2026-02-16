import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("julia", {
      systemPrompt: "You are a Julia expert. Emphasize multiple dispatch and performance.",
      fewShotExamples: [
        {
          task: "Define methods",
          input: "multiple dispatch",
          output: "f(x::Int) = x + 1\n f(x::String) = length(x)"
        },
        {
          task: "Broadcast",
          input: "vectorized add",
          output: "y = x .+ 1"
        }
      ],
      contextHints: ["Prefer type-stable functions.", "Use broadcasting with dot syntax.", "Leverage multiple dispatch."]
    });
  }
}

