"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseTemplate = databaseTemplate;
function databaseTemplate() {
    return [
        "conn = database('db', 'user', 'pass');",
        "data = fetch(conn, 'SELECT 1 AS id');",
        "close(conn);",
        "disp(data)"
    ].join("\n");
}
