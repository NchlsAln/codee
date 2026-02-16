export function cliLoggingTemplate(): string {
  return [
    "import Logging",
    "",
    "var logger = Logger(label: \"app\")",
    "logger.info(\"started\")"
  ].join("\n");
}
