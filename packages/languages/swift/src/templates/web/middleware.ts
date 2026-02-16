export function middlewareTemplate(): string {
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
