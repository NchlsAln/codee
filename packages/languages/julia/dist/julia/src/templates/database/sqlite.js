"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqliteTemplate = sqliteTemplate;
function sqliteTemplate() {
    return [
        "using SQLite, DataFrames",
        "db = SQLite.DB()",
        "SQLite.execute(db, \"CREATE TABLE items (id INTEGER, value TEXT)\")",
        "SQLite.execute(db, \"INSERT INTO items VALUES (1, 'a')\")",
        "df = DataFrame(DBInterface.execute(db, \"SELECT * FROM items\"))",
        "println(df)"
    ].join("\n");
}
