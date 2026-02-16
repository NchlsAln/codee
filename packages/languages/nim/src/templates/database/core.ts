export function databaseTemplate(): string {
  return [
    "import db_sqlite",
    "let db = open(\"app.db\", \"\", \"\", \"\")",
    "db.exec(sql(\"create table if not exists users (id integer, name text)\"))",
    "db.exec(sql(\"insert into users values (1, 'Ada')\"))",
    "for row in db.fastRows(sql(\"select id, name from users\")):",
    "  discard row",
    "db.close()"
  ].join("\n");
}
