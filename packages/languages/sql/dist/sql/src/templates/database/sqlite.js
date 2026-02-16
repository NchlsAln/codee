"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqliteTemplate = sqliteTemplate;
function sqliteTemplate() {
    return [
        "CREATE TABLE IF NOT EXISTS customers (",
        "  customer_id INTEGER PRIMARY KEY AUTOINCREMENT,",
        "  email TEXT NOT NULL UNIQUE,",
        "  created_at TEXT NOT NULL DEFAULT (datetime('now'))",
        ");"
    ].join("\n");
}
