export function ffiWasmTemplate(): string {
  return [
    "-module(wasm_demo).",
    "-export([run/0]).",
    "run() ->",
    "  %% Placeholder for WASM via port",
    "  ok."
  ].join("\n");
}
