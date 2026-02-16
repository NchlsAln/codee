"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authTemplate = authTemplate;
function authTemplate() {
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
