export function sqliteTemplate(): string {
  return [
    "CREATE TABLE IF NOT EXISTS customers (",
    "  customer_id INTEGER PRIMARY KEY AUTOINCREMENT,",
    "  email TEXT NOT NULL UNIQUE,",
    "  created_at TEXT NOT NULL DEFAULT (datetime('now'))",
    ");"
  ].join("\n");
}
