export function queriesTemplate(): string {
  return [
    "import SQLKit",
    "",
    "let sql = req.db as! SQLDatabase",
    "let rows = try await sql.select()",
    "  .column(\"id\").column(\"name\")",
    "  .from(\"users\")",
    "  .where(\"id\", .equal, 1)",
    "  .all()",
    "print(rows.count)"
  ].join("\n");
}
