export function jwtTemplate(): string {
  return [
    "-module(jwt_demo).",
    "-export([run/0]).",
    "run() ->",
    "  %% Placeholder for jose_jwt",
    "  ok."
  ].join("\n");
}
