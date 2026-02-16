export function jsonTemplate(): string {
  return [
    "-module(json_demo).",
    "-export([run/0]).",
    "run() ->",
    "  Map = #{id => 1, name => <<\"Ada\">>},",
    "  Json = jsx:encode(Map),",
    "  Decoded = jsx:decode(Json, [return_maps]),",
    "  io:format(\"~p~n\", [Decoded])."
  ].join("\n");
}
