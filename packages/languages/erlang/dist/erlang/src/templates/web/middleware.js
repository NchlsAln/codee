"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareTemplate = middlewareTemplate;
function middlewareTemplate() {
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
