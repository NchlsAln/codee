"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareTemplate = middlewareTemplate;
function middlewareTemplate() {
    return [
        "import Vapor",
        "",
        "struct RequestIdMiddleware: Middleware {",
        "  func respond(to req: Request, chainingTo next: Responder) -> EventLoopFuture<Response> {",
        "    req.headers.add(name: \"X-Request-Id\", value: UUID().uuidString)",
        "    return next.respond(to: req)",
        "  }",
        "}",
        "",
        "app.middleware.use(RequestIdMiddleware())"
    ].join("\n");
}
