export function cliLoggingTemplate(): string {
  return [
    "<?php",
    "use Monolog\\Logger;",
    "use Monolog\\Handler\\StreamHandler;",
    "",
    "$log = new Logger('app');",
    "$log->pushHandler(new StreamHandler('php://stdout'));",
    "$log->info('started');"
  ].join("\n");
}
