export function queriesTemplate(): string {
  return [
    "use sqlx::PgPool;",
    "",
    "let pool = PgPool::connect(\"postgres://user:pass@localhost/app\").await?;",
    "let rows = sqlx::query!(\"SELECT id, email FROM users WHERE is_active = $1\", true)",
    "    .fetch_all(&pool)",
    "    .await?;",
    "",
    "println!(\"{}\", rows.len());"
  ].join("\n");
}
