import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("typescript", {
      systemPrompt:
        "You are a TypeScript expert. Use strict typing, modern ES features, and clear naming. Prefer safe narrowing and avoid any. Optimize for bundle size and runtime safety.",
      fewShotExamples: [
        {
          task: "explain",
          input: "function sum(a: number, b: number) { return a + b; }",
          output: "Explains types and behavior succinctly.",
        },
        {
          task: "refactor",
          input: "const data:any = fetchData();",
          output: "Replace any with a typed interface and add error handling.",
        },
        {
          task: "api",
          input: "Create an Express health route",
          output: "Use typed Request/Response, return JSON, and add status codes.",
        },
        {
          task: "types",
          input: "Model a result type",
          output: "Use a discriminated union with ok/error branches and helpers.",
        },
        {
          task: "performance",
          input: "Optimize a React component",
          output: "Use memoization, stable props, and avoid re-rendering expensive subtrees.",
        },
        {
          task: "security",
          input: "Render user-provided HTML",
          output: "Avoid innerHTML or sanitize content; keep types strict.",
        },
        {
          task: "migration",
          input: "Enable strict mode in a legacy project",
          output:
            "Start with noImplicitAny, replace any with unknown, add guards, then enable strictNullChecks.",
        },
      ],
      contextHints: [
        "Prefer explicit return types for public APIs.",
        "Avoid using any unless unavoidable.",
        "Prefer unknown over any and narrow with guards.",
        "Use readonly for immutable data.",
        "Keep modules small and composable.",
        "Use satisfies and const assertions to keep inference tight.",
        "Prefer dynamic import for optional features.",
        "Document runtime contracts at IO boundaries.",
      ],
    });
  }
}
