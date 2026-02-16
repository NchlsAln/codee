export function controllerTemplate(): string {
  return [
    "<?php",
    "namespace App\\Http\\Controllers;",
    "",
    "use Symfony\\Component\\HttpFoundation\\JsonResponse;",
    "",
    "final class HealthController",
    "{",
    "  public function index(): JsonResponse",
    "  {",
    "    return new JsonResponse(['ok' => true]);",
    "  }",
    "}",
    ""
  ].join("\n");
}
