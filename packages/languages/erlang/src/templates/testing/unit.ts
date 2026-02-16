export function unitTemplate(): string {
  return [
    "-module(unit_demo).",
    "-include_lib(\"eunit/include/eunit.hrl\").",
    "add_test() -> ?assertEqual(4, 2 + 2)."
  ].join("\n");
}
