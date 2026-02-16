export function migrationsTemplate(): string {
  return [
    "import Fluent",
    "",
    "struct CreateUsers: Migration {",
    "  func prepare(on database: Database) -> EventLoopFuture<Void> {",
    "    database.schema(\"users\")",
    "      .id()",
    "      .field(\"name\", .string, .required)",
    "      .create()",
    "  }",
    "  func revert(on database: Database) -> EventLoopFuture<Void> {",
    "    database.schema(\"users\").delete()",
    "  }",
    "}"
  ].join("\n");
}
