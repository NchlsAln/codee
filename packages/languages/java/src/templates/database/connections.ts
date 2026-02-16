export function connectionsTemplate(): string {
  return "import java.sql.Connection;\nimport java.sql.DriverManager;\n\npublic class ConnectionSample {\n  public static void main(String[] args) throws Exception {\n    try (Connection conn = DriverManager.getConnection(\"jdbc:h2:mem:app\")) {\n      System.out.println(conn.isValid(1));\n    }\n  }\n}\n";
}
