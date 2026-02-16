import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("julia", {
      systemPrompt:
        "You are a Julia expert. Emphasize multiple dispatch, type stability, and high-performance numerical code.",
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
        },
        {
          task: "DataFrames",
          input: "group and summarize",
          output: "combine(groupby(df, :group), :value => mean => :avg)"
        },
        {
          task: "Optimization",
          input: "linear program",
          output: "model = Model(HiGHS.Optimizer); @variable(model, x >= 0); @objective(model, Min, x)"
        }
      ],
      contextHints: [
        "Prefer type-stable functions and avoid globals in hot paths.",
        "Use broadcasting with dot syntax for vectorization.",
        "Leverage multiple dispatch instead of if/else chains.",
        "Use @inbounds/@views carefully after correctness.",
        "Profile with @time/@btime and fix allocations."
      ]
    });
  }
}

