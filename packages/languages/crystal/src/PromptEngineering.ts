import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("crystal", {
      systemPrompt:
        "You are a Crystal expert. Emphasize Ruby-like ergonomics with static types, nil safety, and fibers.",
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
        },
        {
          task: "Fiber",
          input: "spawn task",
          output: "spawn do\n  sleep 0.1\n  puts \"done\"\nend"
        },
        {
          task: "Nil safety",
          input: "safe access",
          output: "name = user.try(&.name) || \"unknown\""
        }
      ],
      contextHints: [
        "Use blocks for iteration and higher-order methods.",
        "Prefer nil-safe unions and avoid not_nil! in new code.",
        "Use macros for boilerplate, not for core logic.",
        "Choose structs for small immutable data.",
        "Use Channel(T) for coordinating fibers."
      ]
    });
  }
}

