"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cowboyHandlerTemplate = cowboyHandlerTemplate;
function cowboyHandlerTemplate() {
    return [
        "-module(health_handler).",
        "-export([init/2]).",
        "",
        "init(Req0, State) ->",
        "  Req = cowboy_req:reply(200, #{}, \"ok\", Req0),",
        "  {ok, Req, State}."
    ].join("\n");
}
