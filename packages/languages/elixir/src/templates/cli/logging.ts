export function cliLoggingTemplate(): string {
  return [
    "require Logger",
    "Logger.info('started')"
  ].join("\n");
}
