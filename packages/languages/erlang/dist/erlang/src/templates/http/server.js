"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServerTemplate = httpServerTemplate;
function httpServerTemplate() {
    return [
        "-module(http_server_demo).",
        "-export([start/0]).",
        "start() ->",
        "  Dispatch = cowboy_router:compile([{'_', [{'_', health_handler, []}]}]),",
        "  {ok, _} = cowboy:start_clear(http_listener, [{port, 8080}], #{env => #{dispatch => Dispatch}})."
    ].join("\n");
}
