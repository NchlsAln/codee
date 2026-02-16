"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
    return [
        "import Vapor",
        "",
        "func routes(_ app: Application) throws {",
        "  app.get(\"health\") { _ in \"ok\" }",
        "  app.get(\"users\", \":id\") { req in",
        "    let id = req.parameters.get(\"id\") ?? \"0\"",
        "    return \"user:\\(id)\"",
        "  }",
        "}"
    ].join("\n");
}
