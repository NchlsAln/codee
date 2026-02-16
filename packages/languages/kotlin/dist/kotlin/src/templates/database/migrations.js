"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
    return [
        "import org.flywaydb.core.Flyway",
        "",
        "val flyway = Flyway.configure()",
        "  .dataSource(\"jdbc:postgresql://localhost/app\", \"user\", \"pass\")",
        "  .load()",
        "flyway.migrate()"
    ].join("\n");
}
