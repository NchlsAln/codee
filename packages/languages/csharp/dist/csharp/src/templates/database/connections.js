"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionsTemplate = connectionsTemplate;
function connectionsTemplate() {
    return [
        "using Microsoft.Data.SqlClient;",
        "",
        "await using var conn = new SqlConnection(\"Server=localhost;Database=app;User Id=sa;Password=pass;\");",
        "await conn.OpenAsync();",
        "Console.WriteLine(conn.State);"
    ].join("\n");
}
