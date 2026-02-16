export function propertyTemplate(): string {
  return [
    "-module(prop_demo).",
    "-export([prop_reverse/0]).",
    "prop_reverse() ->",
    "  ?FORALL(S, list(char()), lists:reverse(lists:reverse(S)) =:= S)."
  ].join("\n");
}
