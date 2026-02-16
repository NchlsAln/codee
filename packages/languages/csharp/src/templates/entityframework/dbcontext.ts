export function efCoreTemplate(): string {
  return [
    "using Microsoft.EntityFrameworkCore;",
    "",
    "public class AppDbContext : DbContext",
    "{",
    "  public DbSet<User> Users => Set<User>();",
    "  public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}",
    "}",
    "",
    "public record User(int Id, string Name);"
  ].join("\n");
}
