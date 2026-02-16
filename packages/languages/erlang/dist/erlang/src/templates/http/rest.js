"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRestTemplate = httpRestTemplate;
function httpRestTemplate() {
    return [
        "-module(user_handler).",
        "-export([init/2]).",
        "init(Req, State) ->",
        "  {Id, Req2} = cowboy_req:binding(id, Req),",
        "  Body = iolist_to_binary([\"{\\\"id\\\":\\\"\", Id, \"\\\"}\"]),",
        "  {ok, cowboy_req:reply(200, #{\"content-type\" => \"application/json\"}, Body, Req2), State}."
    ].join("\n");
}
