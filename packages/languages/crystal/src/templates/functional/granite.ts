export function graniteTemplate(): string {
  return [
    "class User < Granite::Base",
    "  connection sqlite, \"./db.sqlite3\"",
    "  table users",
    "  column name : String",
    "end"
  ].join("\n");
}
