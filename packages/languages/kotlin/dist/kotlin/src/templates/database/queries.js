"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queriesTemplate = queriesTemplate;
function queriesTemplate() {
    return [
        "import java.sql.DriverManager",
        "",
        "DriverManager.getConnection(\"jdbc:postgresql://localhost/app\", \"user\", \"pass\").use { conn ->",
        "  conn.createStatement().use { stmt ->",
        "    val rs = stmt.executeQuery(\"SELECT id, email FROM users WHERE is_active = true\")",
        "    while (rs.next()) println(rs.getString(\"email\"))",
        "  }",
        "}"
    ].join("\n");
}
