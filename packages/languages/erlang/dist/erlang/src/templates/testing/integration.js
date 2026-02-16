"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.integrationTemplate = integrationTemplate;
function integrationTemplate() {
    return [
        "-module(integration_demo).",
        "-export([run/0]).",
        "run() ->",
        "  application:ensure_all_started(inets),",
        "  {ok, {{_, 200, _}, _, _}} = httpc:request(\"http://localhost:8080/health\")."
    ].join("\n");
}
