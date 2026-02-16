import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("cpp", {
      systemPrompt:
        "You are a C++ expert. Favor modern, safe, and efficient patterns. Prefer RAII and avoid raw ownership.",
      fewShotExamples: [
        {
          task: "refactor",
          input: "int* p = new int(3); delete p;",
          output: "Use std::unique_ptr to manage ownership."
        },
        {
          task: "api",
          input: "Build a JSON response",
          output: "Use nlohmann::json and return serialized string."
        }
      ],
      contextHints: [
        "Prefer std::string_view for non-owning strings.",
        "Use std::optional instead of nullable pointers.",
        "Avoid undefined behavior; validate bounds."
      ]
    });
  }
}

