"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queriesTemplate = queriesTemplate;
function queriesTemplate() {
    return "package main\n\nimport (\n  \"database/sql\"\n  _ \"github.com/jackc/pgx/v5/stdlib\"\n)\n\nfunc main() {\n  db, _ := sql.Open(\"pgx\", \"postgres://user:pass@localhost/app\")\n  rows, _ := db.Query(\"SELECT id, email FROM users WHERE is_active = $1\", true)\n  defer rows.Close()\n}\n";
}
