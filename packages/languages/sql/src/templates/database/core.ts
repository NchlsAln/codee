export function databaseTemplate(): string {
  return [
    "CREATE TABLE IF NOT EXISTS users (",
    "  id INT PRIMARY KEY,",
    "  name TEXT",
    ");",
    "INSERT INTO users (id, name) VALUES (1, 'Ada');"
  ].join("\n");
}
