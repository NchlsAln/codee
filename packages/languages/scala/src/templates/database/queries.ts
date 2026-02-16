export function queriesTemplate(): string {
  return [
    "import java.sql.DriverManager",
    "",
    "val conn = DriverManager.getConnection(\"jdbc:postgresql://localhost:5432/app\", \"user\", \"pass\")",
    "val stmt = conn.prepareStatement(\"select id, name from users where id = ?\")",
    "stmt.setLong(1, 1L)",
    "val rs = stmt.executeQuery()",
    "while (rs.next()) {",
    "  println(s\"${rs.getLong(\"id\")}:${rs.getString(\"name\")}\")",
    "}",
    "rs.close()",
    "stmt.close()",
    "conn.close()"
  ].join("\n");
}
