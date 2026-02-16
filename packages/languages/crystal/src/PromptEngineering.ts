import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("crystal", {
      systemPrompt: "You are a Crystal expert. Emphasize static typing with Ruby-like ergonomics.",
      fewShotExamples: [
        {
          task: "Define a struct",
          input: "Point(x,y)",
          output: "struct Point\n  getter x : Int32\n  getter y : Int32\n  def initialize(@x, @y); end\nend"
        },
        {
          task: "Use a block",
          input: "sum list",
          output: "nums.reduce(0) { |acc, n| acc + n }"
        }
      ],
      contextHints: ["Use blocks for iteration.", "Prefer nil-safe types.", "Use macros for boilerplate."]
    });
  }
}

