export function connectionsTemplate(): string {
  return [
    "import sqlite3",
    "",
    "with sqlite3.connect('app.db') as conn:",
    "    conn.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT)')",
    "    conn.execute('INSERT INTO users (email) VALUES (?)', ('ada@example.com',))",
    "    conn.commit()"
  ].join("\n");
}
