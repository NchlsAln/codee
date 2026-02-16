export function migrationsTemplate(): string {
  return [
    "import org.flywaydb.core.Flyway",
    "",
    "val flyway = Flyway.configure()",
    "  .dataSource(\"jdbc:postgresql://localhost:5432/app\", \"user\", \"pass\")",
    "  .load()",
    "",
    "val migrated = flyway.migrate()",
    "println(migrated.migrationsExecuted)"
  ].join("\n");
}
