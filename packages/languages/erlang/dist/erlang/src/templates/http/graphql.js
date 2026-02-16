"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGraphqlTemplate = httpGraphqlTemplate;
function httpGraphqlTemplate() {
    return [
        "-module(graphql_demo).",
        "-export([handle/1]).",
        "handle(Query) ->",
        "  % Placeholder for graphql-erlang integration",
        "  {ok, Query}."
    ].join("\n");
}
