"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionsTemplate = connectionsTemplate;
function connectionsTemplate() {
    return "package main\n\nimport (\n  \"database/sql\"\n  _ \"github.com/mattn/go-sqlite3\"\n)\n\nfunc main() {\n  db, _ := sql.Open(\"sqlite3\", \"app.db\")\n  _ = db.Ping()\n}\n";
}
