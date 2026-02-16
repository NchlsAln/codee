export function databaseTemplate(): string {
  return [
    "conn = database('db', 'user', 'pass');",
    "data = fetch(conn, 'SELECT 1 AS id');",
    "close(conn);",
    "disp(data)"
  ].join("\n");
}
