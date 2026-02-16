"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queriesTemplate = queriesTemplate;
function queriesTemplate() {
    return [
        "-module(db_query).",
        "-export([run/1]).",
        "run(Conn) ->",
        "  epgsql:equery(Conn, \"SELECT id FROM users WHERE email = $1\", [<<\"a@b.com\">>])."
    ].join("\n");
}
