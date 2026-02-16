export function databaseTemplate(): string {
  return [
    "require \"db\"",
    "require \"sqlite3\"",
    "DB.open(\"sqlite3://./app.db\") do |db|",
    "  db.exec \"create table if not exists users (id integer, name text)\"",
    "  db.exec \"insert into users values (1, 'Ada')\"",
    "  db.query_each \"select id, name from users\" do |rs|",
    "    rs.read(Int32); rs.read(String)",
    "  end",
    "end"
  ].join("\n");
}
