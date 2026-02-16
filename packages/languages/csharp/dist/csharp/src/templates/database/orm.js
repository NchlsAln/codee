"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormTemplate = ormTemplate;
function ormTemplate() {
    return [
        "using Microsoft.EntityFrameworkCore;",
        "",
        "public class AppDbContext : DbContext {",
        "  public DbSet<User> Users => Set<User>();",
        "}",
        "",
        "public record User(int Id, string Name);",
        "",
        "using var db = new AppDbContext();",
        "var users = await db.Users.ToListAsync();",
        "Console.WriteLine(users.Count);"
    ].join("\n");
}
