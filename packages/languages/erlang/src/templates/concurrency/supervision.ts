export function supervisionTemplate(): string {
  return [
    "-module(supervisor_demo).",
    "-export([start/0]).",
    "start() ->",
    "  Supervisor = {my_sup, {one_for_one, 1, 5}, []},",
    "  supervisor:start_link(Supervisor)."
  ].join("\n");
}
