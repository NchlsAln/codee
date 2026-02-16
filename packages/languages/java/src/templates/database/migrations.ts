export function migrationsTemplate(): string {
  return "import org.flywaydb.core.Flyway;\n\npublic class Migrate {\n  public static void main(String[] args) {\n    Flyway.configure()\n      .dataSource(\"jdbc:postgresql://localhost/app\", \"user\", \"pass\")\n      .load()\n      .migrate();\n  }\n}\n";
}
