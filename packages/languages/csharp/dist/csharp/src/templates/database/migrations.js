"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationsTemplate = migrationsTemplate;
function migrationsTemplate() {
    return [
        "using Microsoft.EntityFrameworkCore;",
        "",
        "using var db = new AppDbContext();",
        "db.Database.Migrate();",
        "Console.WriteLine(\"migrated\");"
    ].join("\n");
}
