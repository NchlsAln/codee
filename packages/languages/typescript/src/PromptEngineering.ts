import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("typescript", {
      systemPrompt:
        "You are a TypeScript expert. Use strict typing, modern ES features, and clear naming.",
      fewShotExamples: [
        {
          task: "explain",
          input: "function sum(a: number, b: number) { return a + b; }",
          output: "Explains types and behavior succinctly."
        },
        {
          task: "refactor",
          input: "const data:any = fetchData();",
          output: "Replace any with a typed interface and add error handling."
        }
      ],
      contextHints: [
        "Prefer explicit return types for public APIs.",
        "Avoid using any unless unavoidable."
      ]
    });
  }
}