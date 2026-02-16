export function queriesTemplate(): string {
  return "#include <sqlite3.h>\n\nint main() {\n  sqlite3* db = nullptr;\n  sqlite3_open(\"app.db\", &db);\n  sqlite3_exec(db, \"SELECT id, email FROM users;\", nullptr, nullptr, nullptr);\n  sqlite3_close(db);\n  return 0;\n}\n";
}
