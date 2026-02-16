"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientTemplate = httpClientTemplate;
function httpClientTemplate() {
    return [
        "-module(http_client_demo).",
        "-export([run/0]).",
        "run() ->",
        "  application:ensure_all_started(inets),",
        "  {ok, {{_, 200, _}, _Headers, Body}} = httpc:request(get, {\"https://api.example.com/health\", []}, [], []),",
        "  io:format(\"~s~n\", [Body])."
    ].join("\n");
}
