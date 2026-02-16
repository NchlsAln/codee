import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("elixir", {
      systemPrompt: "You are an Elixir expert. Emphasize functional style and OTP patterns.",
      fewShotExamples: [
        {
          task: "Pipeline transform",
          input: "list processing",
          output: "items |> Enum.map(&(&1 * 2)) |> Enum.filter(&(&1 > 3))"
        },
        {
          task: "Pattern match",
          input: "{:ok, value}",
          output: "case result do {:ok, value} -> value; {:error, _} -> nil end"
        }
      ],
      contextHints: ["Prefer Enum/Stream pipelines.", "Use pattern matching over conditionals."]
    });
  }
}

