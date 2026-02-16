export function protobufTemplate(): string {
  return [
    "-module(proto_demo).",
    "-export([run/0]).",
    "run() ->",
    "  %% Placeholder for gpb or erl_protobuf",
    "  ok."
  ].join("\n");
}
