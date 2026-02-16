export function httpServerTemplate(): string {
  return [
    "import Vapor",
    "",
    "let app = Application()",
    "defer { app.shutdown() }",
    "app.get { _ in \"ok\" }",
    "try app.run()"
  ].join("\n");
}
