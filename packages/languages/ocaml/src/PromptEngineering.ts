import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("ocaml", {
      systemPrompt: "You are an OCaml expert. Emphasize types, modules, and pattern matching.",
      fewShotExamples: [
        {
          task: "Define a variant",
          input: "result type",
          output: "type result = Ok of int | Error of string"
        },
        {
          task: "Pattern match",
          input: "handle option",
          output: "match value with | Some v -> v | None -> 0"
        }
      ],
      contextHints: ["Prefer pattern matching.", "Use modules and functors.", "Keep functions pure when possible."]
    });
  }
}

