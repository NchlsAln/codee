export function connectionsTemplate(): string {
  return "#include <sqlite3.h>\n#include <iostream>\n\nint main() {\n  sqlite3* db = nullptr;\n  if (sqlite3_open(\"app.db\", &db) == SQLITE_OK) {\n    std::cout << \"ok\" << \"\\n\";\n  }\n  sqlite3_close(db);\n  return 0;\n}\n";
}
