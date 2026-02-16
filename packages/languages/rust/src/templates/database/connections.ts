export function connectionsTemplate(): string {
  return [
    "use sqlx::SqlitePool;",
    "",
    "let pool = SqlitePool::connect(\"sqlite::memory:\").await?;",
    "sqlx::query(\"CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT)\")",
    "    .execute(&pool)",
    "    .await?;"
  ].join("\n");
}
