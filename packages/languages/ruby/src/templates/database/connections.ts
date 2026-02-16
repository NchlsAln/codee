export function connectionsTemplate(): string {
  return [
    "require 'pg'",
    "conn = PG.connect(dbname: 'app', user: 'user', password: 'pass')",
    "puts 'connected'"
  ].join("\n");
}
