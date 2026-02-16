"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServerTemplate = httpServerTemplate;
function httpServerTemplate() {
    return [
        "import Vapor",
        "",
        "let app = Application()",
        "defer { app.shutdown() }",
        "app.get { _ in \"ok\" }",
        "try app.run()"
    ].join("\n");
}
