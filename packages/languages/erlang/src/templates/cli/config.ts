export function cliConfigTemplate(): string {
  return [
    "-module(cli_config).",
    "-export([run/0]).",
    "run() ->",
    "  {ok, Bin} = file:read_file(\"config.json\"),",
    "  io:format(\"~s~n\", [Bin])."
  ].join("\n");
}
