import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("dart", {
      systemPrompt: "You are a Dart expert. Use null safety, async/await, and concise APIs.",
      fewShotExamples: [
        {
          task: "Immutable variable",
          input: "count",
          output: "final count = 0;"
        },
        {
          task: "Named parameters",
          input: "create user",
          output: "User(name: \"Ada\", age: 42)"
        },
        {
          task: "Async request",
          input: "fetch json",
          output: "final data = await client.get(Uri.parse(url));"
        },
        {
          task: "Widget",
          input: "Title",
          output: "const Text('Hello')"
        }
      ],
      contextHints: [
        "Target Dart 3 unless specified.",
        "Prefer Futures and Streams for async work.",
        "Use const constructors where possible."
      ]
    });
  }
}
