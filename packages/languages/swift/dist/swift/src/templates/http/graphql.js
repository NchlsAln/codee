"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGraphqlTemplate = httpGraphqlTemplate;
function httpGraphqlTemplate() {
    return [
        "import Graphiti",
        "",
        "struct Query: Codable { let ping: String }",
        "let schema = Schema<Query, Void> {",
        "  Type(Query.self) {",
        "    Field(\"ping\", at: Query.ping)",
        "  }",
        "}",
        "print(schema.queryType.name)"
    ].join("\n");
}
