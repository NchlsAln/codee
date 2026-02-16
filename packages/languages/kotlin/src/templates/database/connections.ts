export function connectionsTemplate(): string {
  return [
    "import java.sql.DriverManager",
    "",
    "DriverManager.getConnection(\"jdbc:h2:mem:app\").use { conn ->",
    "  println(conn.isValid(1))",
    "}"
  ].join("\n");
}
