export function koinDiTemplate(): string {
  return [
    "import org.koin.core.context.startKoin",
    "import org.koin.dsl.module",
    "",
    "class Greeter {",
    "  fun greet() = \"hi\"",
    "}",
    "",
    "val appModule = module {",
    "  single { Greeter() }",
    "}",
    "",
    "fun main() {",
    "  startKoin { modules(appModule) }",
    "}"
  ].join("\n");
}
