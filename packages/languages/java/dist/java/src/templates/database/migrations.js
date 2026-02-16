"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
    return "import org.flywaydb.core.Flyway;\n\npublic class Migrate {\n  public static void main(String[] args) {\n    Flyway.configure()\n      .dataSource(\"jdbc:postgresql://localhost/app\", \"user\", \"pass\")\n      .load()\n      .migrate();\n  }\n}\n";
}
