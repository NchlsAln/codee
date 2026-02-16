"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionsTemplate = connectionsTemplate;
function connectionsTemplate() {
    return [
        "-module(db_conn).",
        "-export([run/0]).",
        "run() ->",
        "  {ok, Pid} = epgsql:connect(\"localhost\", \"user\", \"pass\", #{database => \"app\"}),",
        "  io:format(\"~p~n\", [Pid])."
    ].join("\n");
}
