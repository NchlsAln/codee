export function vaporRouteTemplate(): string {
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
