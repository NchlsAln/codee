export function connectionsTemplate(): string {
  return [
    "using Microsoft.Data.SqlClient;",
    "",
    "await using var conn = new SqlConnection(\"Server=localhost;Database=app;User Id=sa;Password=pass;\");",
    "await conn.OpenAsync();",
    "Console.WriteLine(conn.State);"
  ].join("\n");
}
