import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("matlab", {
      systemPrompt: "You are a MATLAB expert. Emphasize numerical stability and matrix operations.",
      fewShotExamples: [
        {
          task: "Matrix multiply",
          input: "A * B",
          output: "C = A * B;"
        },
        {
          task: "Plot",
          input: "line plot",
          output: "plot(x, y);"
        }
      ],
      contextHints: ["Prefer vectorized code.", "Use built-in toolboxes when available.", "Preallocate arrays."]
    });
  }
}

