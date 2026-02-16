export function ffiCTemplate(): string {
  return [
    "-module(nif_demo).",
    "-on_load(init/0).",
    "-export([init/0, add/2]).",
    "init() -> erlang:load_nif(\"./nif_demo\", 0).",
    "add(_, _) -> erlang:nif_error(nif_not_loaded)."
  ].join("\n");
}
