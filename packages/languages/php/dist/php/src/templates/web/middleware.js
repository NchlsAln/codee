"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareTemplate = middlewareTemplate;
function middlewareTemplate() {
    return [
        "<?php",
        "namespace App\\Http\\Middleware;",
        "",
        "use Psr\\Http\\Message\\ResponseInterface;",
        "use Psr\\Http\\Message\\ServerRequestInterface;",
        "use Psr\\Http\\Server\\MiddlewareInterface;",
        "use Psr\\Http\\Server\\RequestHandlerInterface;",
        "",
        "final class AuthMiddleware implements MiddlewareInterface",
        "{",
        "  public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface",
        "  {",
        "    $token = $request->getHeaderLine('Authorization');",
        "    if ($token === '') {",
        "      return new \\Nyholm\\Psr7\\Response(401);",
        "    }",
        "    return $handler->handle($request);",
        "  }",
        "}",
        ""
    ].join("\n");
}
