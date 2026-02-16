"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerTemplate = controllerTemplate;
function controllerTemplate() {
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
