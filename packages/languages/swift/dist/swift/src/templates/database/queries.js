"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queriesTemplate = queriesTemplate;
function queriesTemplate() {
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
