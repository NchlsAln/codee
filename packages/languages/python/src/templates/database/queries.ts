export function queriesTemplate(): string {
  return [
    "import psycopg",
    "",
    "with psycopg.connect('postgresql://user:pass@localhost/app') as conn:",
    "    with conn.cursor() as cur:",
    "        cur.execute('SELECT id, email FROM users WHERE is_active = %s', (True,))",
    "        rows = cur.fetchall()",
    "        print(rows)"
  ].join("\n");
}
