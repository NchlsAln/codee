export function migrationsTemplate(): string {
  return [
    "-module(db_migration).",
    "-export([run/1]).",
    "run(Conn) ->",
    "  epgsql:squery(Conn, \"CREATE TABLE users(id serial primary key, email text)\")."
  ].join("\n");
}
