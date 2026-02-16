"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vaporRouteTemplate = vaporRouteTemplate;
function vaporRouteTemplate() {
    return [
        "import Vapor",
        "",
        "func routes(_ app: Application) throws {",
        "  app.get(\"hello\") { req in",
        "    return \"hello\"",
        "  }",
        "}"
    ].join("\n");
}
