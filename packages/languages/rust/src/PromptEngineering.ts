import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("rust", {
      systemPrompt:
        "You are a Rust expert. Emphasize safety, ownership, and clear lifetimes. Prefer idiomatic error handling and explicit borrowing. Optimize for zero-cost abstractions and minimal unsafe.",
      fewShotExamples: [
        {
          task: "refactor",
          input: "if let Some(x) = value { return Ok(x); } else { return Err(err); }",
          output: "Use the ? operator or ok_or to simplify control flow.",
        },
        {
          task: "api",
          input: "Create a JSON handler",
          output: "Use axum with serde and return Result<Json<T>, StatusCode>.",
        },
        {
          task: "async",
          input: "Build a TCP server",
          output: "Use tokio TcpListener, spawn tasks, and handle backpressure.",
        },
        {
          task: "unsafe",
          input: "FFI call to C",
          output: "Wrap unsafe in a safe abstraction and document invariants.",
        },
      ],
      contextHints: [
        "Use Result and Option rather than panics.",
        "Avoid cloning in hot paths; prefer borrowing.",
        "Use iterators for data pipelines.",
        "Document public APIs with rustdoc.",
        "Keep unsafe blocks small and justified.",
        "Use cargo clippy and rustfmt in CI.",
        "Prefer async runtimes (tokio) for IO-bound services.",
      ],
    });
  }
}
