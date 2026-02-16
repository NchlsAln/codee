"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
    return [
        "-module(db_migration).",
        "-export([run/1]).",
        "run(Conn) ->",
        "  epgsql:squery(Conn, \"CREATE TABLE users(id serial primary key, email text)\")."
    ].join("\n");
}
