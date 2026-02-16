export function cliArgsTemplate(): string {
  return [
    "-module(cli_args).",
    "-export([run/1]).",
    "run(Args) ->",
    "  io:format(\"~p~n\", [Args])."
  ].join("\n");
}
