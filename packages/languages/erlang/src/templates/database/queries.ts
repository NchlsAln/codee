export function queriesTemplate(): string {
  return [
    "-module(db_query).",
    "-export([run/1]).",
    "run(Conn) ->",
    "  epgsql:equery(Conn, \"SELECT id FROM users WHERE email = $1\", [<<\"a@b.com\">>])."
  ].join("\n");
}
