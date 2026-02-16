export function httpGraphqlTemplate(): string {
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
