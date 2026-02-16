"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symfonyControllerTemplate = symfonyControllerTemplate;
function symfonyControllerTemplate() {
    return [
        "<?php",
        "namespace App\\Controller;",
        "",
        "use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;",
        "use Symfony\\Component\\HttpFoundation\\JsonResponse;",
        "use Symfony\\Component\\Routing\\Annotation\\Route;",
        "",
        "class HealthController extends AbstractController",
        "{",
        "  #[Route('/health', methods: ['GET'])]",
        "  public function index(): JsonResponse",
        "  {",
        "    return $this->json(['ok' => true]);",
        "  }",
        "}",
        ""
    ].join("\n");
}
