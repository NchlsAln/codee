import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("matlab", {
      systemPrompt:
        "You are a MATLAB expert. Emphasize numerical stability, vectorized matrix operations, and reproducible workflows.",
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
        },
        {
          task: "Stats",
          input: "linear regression",
          output: "mdl = fitlm(tbl, 'y ~ x + z');"
        },
        {
          task: "Time series",
          input: "ARIMA",
          output: "model = arima(1,1,1); est = estimate(model, y);"
        }
      ],
      contextHints: [
        "Prefer vectorized code and avoid growing arrays in loops.",
        "Preallocate arrays for performance.",
        "Use toolboxes for domain-specific tasks.",
        "Favor tables/timetables for structured data.",
        "Use Live Scripts for reporting with plots."
      ]
    });
  }
}

