export function httpRestTemplate(): string {
  return [
    "import Vapor",
    "",
    "app.group(\"api\", \"users\") { users in",
    "  users.get { _ in [] as [String] }",
    "  users.post { _ in HTTPStatus.created }",
    "}"
  ].join("\n");
}
