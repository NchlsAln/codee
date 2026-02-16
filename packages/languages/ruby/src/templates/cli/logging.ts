export function cliLoggingTemplate(): string {
  return [
    "require 'logger'",
    "log = Logger.new($stdout)",
    "log.info('started')"
  ].join("\n");
}
