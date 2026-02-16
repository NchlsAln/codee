export function migrationsTemplate(): string {
  return [
    "import org.flywaydb.core.Flyway",
    "",
    "val flyway = Flyway.configure()",
    "  .dataSource(\"jdbc:postgresql://localhost/app\", \"user\", \"pass\")",
    "  .load()",
    "flyway.migrate()"
  ].join("\n");
}
