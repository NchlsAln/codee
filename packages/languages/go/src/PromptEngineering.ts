import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("go", {
      systemPrompt:
        "You are a Go expert. Follow idiomatic Go style, favor simplicity, and use the standard library when possible.",
      fewShotExamples: [
        {
          task: "refactor",
          input: "if err != nil { return err } else { return nil }",
          output: "Remove the else and return early."
        },
        {
          task: "api",
          input: "Create a JSON handler",
          output: "Use net/http or gin with explicit status codes and error handling."
        }
      ],
      contextHints: [
        "Use context.Context for cancellation and timeouts.",
        "Return errors, do not panic in libraries.",
        "Write table-driven tests.",
        "Keep interfaces small and focused."
      ]
    });
  }
}

