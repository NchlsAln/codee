"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseTemplate = databaseTemplate;
function databaseTemplate() {
    return [
        "using SQLite, DataFrames",
        "db = SQLite.DB(\"app.db\")",
        "df = DataFrame(SQLite.Query(db, \"select 1 as id\"))",
        "println(df)"
    ].join("\n");
}
