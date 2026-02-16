export function binaryTemplate(): string {
  return [
    "-module(binary_demo).",
    "-export([run/0]).",
    "run() ->",
    "  Bin = term_to_binary(#{id => 1}),",
    "  Map = binary_to_term(Bin),",
    "  io:format(\"~p~n\", [Map])."
  ].join("\n");
}
