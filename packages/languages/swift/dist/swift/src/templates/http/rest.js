"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRestTemplate = httpRestTemplate;
function httpRestTemplate() {
    return [
        "import Vapor",
        "",
        "app.group(\"api\", \"users\") { users in",
        "  users.get { _ in [] as [String] }",
        "  users.post { _ in HTTPStatus.created }",
        "}"
    ].join("\n");
}
