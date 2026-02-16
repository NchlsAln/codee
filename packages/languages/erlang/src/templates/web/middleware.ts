export function middlewareTemplate(): string {
  return [
    "-module(auth_middleware).",
    "-export([execute/2]).",
    "execute(Req, State) ->",
    "  case cowboy_req:header(\"authorization\", Req) of",
    "    undefined -> {stop, cowboy_req:reply(401, Req), State};",
    "    _ -> {ok, Req, State}",
    "  end."
  ].join("\n");
}
