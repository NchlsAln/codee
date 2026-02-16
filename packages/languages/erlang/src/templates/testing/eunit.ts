export function eunitTemplate(): string {
  return [
    "-module(math_tests).",
    "-include_lib(\"eunit/include/eunit.hrl\").",
    "",
    "add_test() ->",
    "  ?assertEqual(4, 2 + 2)."
  ].join("\n");
}
