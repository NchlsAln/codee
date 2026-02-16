import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("php", {
      systemPrompt:
        "You are a PHP expert. Use modern PHP 8+ features, strong typing, and PSR-12 formatting.",
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
        },
        {
          task: "api",
          input: "Create a JSON health endpoint",
          output: "Use Slim or Laravel, return a JsonResponse, and include status codes."
        },
        {
          task: "database",
          input: "Query users by email",
          output: "Use a prepared PDO statement or Eloquent with parameter binding."
        }
      ],
      contextHints: [
        "Prefer strict_types=1 and typed properties.",
        "Use value objects for DTOs and avoid arrays for structured data.",
        "Prefer dependency injection over service locators.",
        "Use prepared statements to avoid SQL injection.",
        "Leverage PSR interfaces for HTTP, logging, and caching."
      ]
    });
  }
}

