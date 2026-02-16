"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
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
