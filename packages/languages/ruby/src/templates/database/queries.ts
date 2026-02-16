export function queriesTemplate(): string {
  return [
    "require 'pg'",
    "conn = PG.connect(dbname: 'app')",
    "result = conn.exec_params('SELECT id FROM users WHERE email = $1', [email])",
    "puts result.values"
  ].join("\n");
}
