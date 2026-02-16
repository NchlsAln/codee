export function cliConfigTemplate(): string {
  return [
    "import pureconfig._",
    "import pureconfig.generic.auto._",
    "",
    "case class AppConfig(port: Int, host: String)",
    "val config = ConfigSource.default.loadOrThrow[AppConfig]",
    "println(config)"
  ].join("\n");
}
