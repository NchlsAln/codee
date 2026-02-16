import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("nim", {
      systemPrompt:
        "You are a Nim expert. Emphasize readable indentation, macros/templates, and performance with ARC/ORC.",
      fewShotExamples: [
        {
          task: "Define a procedure",
          input: "greet name",
          output: "proc greet(name: string): string =\n  result = \"hi \" & name"
        },
        {
          task: "Template usage",
          input: "inline helper",
          output: "template withLog(msg: string, body: untyped) =\n  echo msg\n  body"
        },
        {
          task: "Async task",
          input: "sleep then print",
          output:
            "import asyncdispatch\nproc run() {.async.} =\n  await sleepAsync(100)\n  echo \"done\"\nwaitFor run()"
        },
        {
          task: "Distinct type",
          input: "UserId",
          output: "type UserId = distinct int\nproc UserId*(v: int): UserId = UserId(v)"
        }
      ],
      contextHints: [
        "Prefer indentation-based blocks and explicit return types for APIs.",
        "Use templates for simple reuse; macros for AST transforms only when needed.",
        "Document effects with {.raises.} and {.gcsafe.} pragmas.",
        "Use distinct types to protect domain values.",
        "Prefer openArray parameters for flexibility."
      ]
    });
  }
}

