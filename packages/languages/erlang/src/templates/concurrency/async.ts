export function asyncTemplate(): string {
  return [
    "-module(async_demo).",
    "-export([run/0]).",
    "run() ->",
    "  Parent = self(),",
    "  spawn(fun() -> Parent ! {done, 42} end),",
    "  receive",
    "    {done, Value} -> Value",
    "  end."
  ].join("\n");
}
