"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseTemplate = databaseTemplate;
function databaseTemplate() {
    return [
        "conn = database('mydb','user','password');",
        "data = fetch(conn, 'SELECT * FROM items');",
        "close(conn);"
    ].join("\n");
}
