export function cliArgsTemplate(): string {
  return [
    "import ArgumentParser",
    "",
    "struct App: ParsableCommand {",
    "  @Option var port: Int = 8080",
    "  func run() throws { print(port) }",
    "}",
    "",
    "App.main()"
  ].join("\n");
}
