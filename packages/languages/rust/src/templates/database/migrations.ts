export function migrationsTemplate(): string {
  return [
    "use sqlx::migrate::Migrator;",
    "use sqlx::PgPool;",
    "",
    "static MIGRATOR: Migrator = sqlx::migrate!();",
    "",
    "let pool = PgPool::connect(\"postgres://user:pass@localhost/app\").await?;",
    "MIGRATOR.run(&pool).await?;"
  ].join("\n");
}
