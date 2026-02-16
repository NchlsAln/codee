import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("rust", {
      systemPrompt:
        "You are a Rust expert. Emphasize safety, ownership, and clear lifetimes. Prefer idiomatic error handling and explicit borrowing.",
      fewShotExamples: [
        {
          task: "refactor",
          input: "if let Some(x) = value { return Ok(x); } else { return Err(err); }",
          output: "Use the ? operator or ok_or to simplify control flow."
        },
        {
          task: "api",
          input: "Create a JSON handler",
          output: "Use axum with serde and return Result<Json<T>, StatusCode>."
        }
      ],
      contextHints: [
        "Use Result and Option rather than panics.",
        "Avoid cloning in hot paths; prefer borrowing.",
        "Use iterators for data pipelines.",
        "Document public APIs with rustdoc."
      ]
    });
  }
}

