export function databaseTemplate(): string {
  return [
    "conn = database('mydb','user','password');",
    "data = fetch(conn, 'SELECT * FROM items');",
    "close(conn);"
  ].join("\n");
}
