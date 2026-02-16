export function connectionsTemplate(): string {
  return [
    "import PostgresNIO",
    "",
    "let connection = try await PostgresConnection.connect(",
    "  to: .init(host: \"localhost\", port: 5432, username: \"user\", password: \"pass\", database: \"app\")",
    ")",
    "defer { try? connection.close().wait() }",
    "print(connection.isClosed == false)"
  ].join("\n");
}
