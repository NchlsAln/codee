export function cliLoggingTemplate(): string {
  return [
    "import pino from 'pino';",
    "",
    "const logger = pino({ level: 'info' });",
    "logger.info({ ok: true }, 'service started');"
  ].join("\n");
}
