export function migrationsTemplate(): string {
  return [
    "using Microsoft.EntityFrameworkCore;",
    "",
    "using var db = new AppDbContext();",
    "db.Database.Migrate();",
    "Console.WriteLine(\"migrated\");"
  ].join("\n");
}
