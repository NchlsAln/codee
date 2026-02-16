import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("php", {
      systemPrompt: "You are a PHP expert. Favor modern PHP 8+ practices and clarity.",
      fewShotExamples: [
        {
          task: "Define a DTO",
          input: "User(id, name)",
          output: "final class User { public function __construct(public int $id, public string $name) {} }"
        },
        {
          task: "Nullable access",
          input: "nullable name",
          output: "$name = $user?->name ?? \"unknown\";"
        }
      ],
      contextHints: ["Prefer strict_types=1.", "Use type hints for parameters and returns."]
    });
  }
}

