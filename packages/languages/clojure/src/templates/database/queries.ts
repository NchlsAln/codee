export function queriesTemplate(): string {
  return [
    "(require '[next.jdbc :as jdbc])",
    "(def ds (jdbc/get-datasource {:dbtype \"postgres\" :dbname \"app\"}))",
    "(jdbc/execute! ds [\"select id from users where email = ?\" \"a@b.com\"])"
  ].join("\n");
}
