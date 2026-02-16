export function cliLoggingTemplate(): string {
  return [
    "-module(cli_logging).",
    "-export([run/0]).",
    "run() ->",
    "  error_logger:info_msg(\"started~n\")."
  ].join("\n");
}
