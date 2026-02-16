export function databaseTemplate(): string {
  return [
    "const sqlite = @import(\"sqlite\");",
    "const User = struct { id: i32, name: []const u8 };",
    "pub fn main() !void {",
    "  var db = try sqlite.open(\"app.db\");",
    "  defer db.close();",
    "  try db.exec(\"create table if not exists users (id integer, name text)\");",
    "  try db.exec(\"insert into users values (1, 'Ada')\");",
    "  const rows = try db.query(\"select id, name from users\");",
    "  _ = rows; _ = User{ .id = 1, .name = \"Ada\" };",
    "}"
  ].join("\n");
}
