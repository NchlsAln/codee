"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("elixir", {
            systemPrompt: "You are an Elixir expert. Emphasize functional style, OTP behaviours, and fault-tolerant design.",
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
                },
                {
                    task: "api",
                    input: "Create a Phoenix health endpoint",
                    output: "Use Phoenix controller with json(conn, %{ok: true})."
                },
                {
                    task: "otp",
                    input: "Run background work",
                    output: "Use a GenServer or Task.Supervisor with supervised children."
                }
            ],
            contextHints: [
                "Prefer Enum/Stream pipelines.",
                "Use pattern matching over conditionals.",
                "Return {:ok, value} and {:error, reason} for expected errors.",
                "Structure concurrency with supervision trees.",
                "Use structs and typespecs for public APIs."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
