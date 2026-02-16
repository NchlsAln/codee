export function laravelControllerTemplate(): string {
  return [
    "<?php",
    "namespace App\\Http\\Controllers;",
    "",
    "use Illuminate\\Http\\JsonResponse;",
    "use Illuminate\\Routing\\Controller;",
    "",
    "class HealthController extends Controller",
    "{",
    "  public function index(): JsonResponse",
    "  {",
    "    return response()->json(['ok' => true]);",
    "  }",
    "}",
    ""
  ].join("\n");
}
