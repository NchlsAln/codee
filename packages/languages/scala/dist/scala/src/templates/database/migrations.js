"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
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
