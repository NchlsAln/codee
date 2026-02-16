"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
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
exports.PromptEngineering = PromptEngineering;
