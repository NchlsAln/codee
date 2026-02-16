"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionsTemplate = connectionsTemplate;
function connectionsTemplate() {
    return [
        "use sqlx::SqlitePool;",
        "",
        "let pool = SqlitePool::connect(\"sqlite::memory:\").await?;",
        "sqlx::query(\"CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT)\")",
        "    .execute(&pool)",
        "    .await?;"
    ].join("\n");
}
