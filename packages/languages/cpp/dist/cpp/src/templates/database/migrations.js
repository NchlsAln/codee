"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
    return "#include <sqlite3.h>\n\nint main() {\n  sqlite3* db = nullptr;\n  sqlite3_open(\"app.db\", &db);\n  sqlite3_exec(db, \"ALTER TABLE users ADD COLUMN is_active INTEGER DEFAULT 1;\", nullptr, nullptr, nullptr);\n  sqlite3_close(db);\n  return 0;\n}\n";
}
