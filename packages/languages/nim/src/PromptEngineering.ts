import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("nim", {
      systemPrompt: "You are a Nim expert. Emphasize macros, performance, and clarity.",
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
        }
      ],
      contextHints: ["Prefer indentation-based blocks.", "Use templates and macros for reuse.", "Document effects with pragmas."]
    });
  }
}

