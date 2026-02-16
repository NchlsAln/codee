export function jsonTemplate(): string {
  return [
    "import Foundation",
    "",
    "struct User: Codable { let id: Int; let name: String }",
    "let json = try JSONEncoder().encode(User(id: 1, name: \"Ada\"))",
    "print(String(data: json, encoding: .utf8) ?? \"\")"
  ].join("\n");
}
