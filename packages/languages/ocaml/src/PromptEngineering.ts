import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("ocaml", {
      systemPrompt:
        "You are an OCaml expert. Emphasize type inference, modules/functors, and pattern matching with immutable data.",
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
        },
        {
          task: "Module",
          input: "counter",
          output:
            "module Counter = struct\n  type t = { mutable value : int }\n  let create () = { value = 0 }\n  let inc t = t.value <- t.value + 1\nend"
        },
        {
          task: "Pipeline",
          input: "sum evens",
          output: "[1;2;3;4] |> List.filter (fun x -> x mod 2 = 0) |> List.fold_left (+) 0"
        }
      ],
      contextHints: [
        "Prefer pattern matching over chained if/else.",
        "Use modules and functors to structure large codebases.",
        "Avoid Obj.magic except in isolated FFI boundaries.",
        "Favor immutable data and use refs/mutable fields sparingly.",
        "Make recursive functions tail-recursive when possible."
      ]
    });
  }
}

