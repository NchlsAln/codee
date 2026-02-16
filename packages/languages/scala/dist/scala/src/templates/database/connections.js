"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionsTemplate = connectionsTemplate;
function connectionsTemplate() {
    return [
        "import com.zaxxer.hikari.{HikariConfig, HikariDataSource}",
        "",
        "val config = new HikariConfig()",
        "config.setJdbcUrl(\"jdbc:postgresql://localhost:5432/app\")",
        "config.setUsername(\"user\")",
        "config.setPassword(\"pass\")",
        "",
        "val ds = new HikariDataSource(config)",
        "val conn = ds.getConnection()",
        "println(conn.isValid(2))",
        "conn.close()",
        "ds.close()"
    ].join("\n");
}
