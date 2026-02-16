export function cliLoggingTemplate(): string {
  return [
    "import org.slf4j.LoggerFactory",
    "",
    "val logger = LoggerFactory.getLogger(\"app\")",
    "logger.info(\"started\")"
  ].join("\n");
}
