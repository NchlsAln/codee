export function authTemplate(): string {
  return [
    "import Vapor",
    "",
    "struct User: Authenticatable { let id: UUID }",
    "",
    "app.get(\"me\") { req -> String in",
    "  let user = try req.auth.require(User.self)",
    "  return user.id.uuidString",
    "}",
    "",
    "app.middleware.use(User.authenticator())"
  ].join("\n");
}
