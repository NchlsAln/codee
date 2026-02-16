export function ormTemplate(): string {
  return [
    "import Fluent",
    "",
    "final class User: Model {",
    "  static let schema = \"users\"",
    "  @ID var id: UUID?",
    "  @Field(key: \"name\") var name: String",
    "}",
    "",
    "let users = try await User.query(on: req.db).all()",
    "print(users.count)"
  ].join("\n");
}
