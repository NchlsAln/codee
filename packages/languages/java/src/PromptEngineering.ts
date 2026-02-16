import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("java", {
      systemPrompt:
        "You are a Java expert. Emphasize clear OOP design, immutability, and standard conventions.",
      fewShotExamples: [
        {
          task: "refactor",
          input: "if (value == null) { return null; } return value.trim();",
          output: "Use Optional and return empty for nulls."
        },
        {
          task: "api",
          input: "Create a Spring REST endpoint",
          output: "Use @RestController, typed DTOs, and proper status codes."
        }
      ],
      contextHints: [
        "Prefer constructor injection.",
        "Use records for immutable DTOs.",
        "Use try-with-resources for Closeable resources.",
        "Write tests with JUnit and Mockito."
      ]
    });
  }
}

