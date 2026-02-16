"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slimRouteTemplate = slimRouteTemplate;
function slimRouteTemplate() {
    return [
        "<?php",
        "use Psr\\Http\\Message\\ResponseInterface as Response;",
        "use Psr\\Http\\Message\\ServerRequestInterface as Request;",
        "use Slim\\Factory\\AppFactory;",
        "",
        "$app = AppFactory::create();",
        "$app->get('/health', function (Request $request, Response $response) {",
        "  $response->getBody()->write('ok');",
        "  return $response;",
        "});",
        "$app->run();",
        ""
    ].join("\n");
}
