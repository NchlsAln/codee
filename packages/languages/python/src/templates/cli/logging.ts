export function cliLoggingTemplate(): string {
  return [
    "import logging",
    "",
    "logging.basicConfig(level=logging.INFO)",
    "logger = logging.getLogger('app')",
    "",
    "logger.info('service started')"
  ].join("\n");
}
