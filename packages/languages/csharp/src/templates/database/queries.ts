export function queriesTemplate(): string {
  return [
    "using Dapper;",
    "using Microsoft.Data.SqlClient;",
    "",
    "using var conn = new SqlConnection(\"Server=localhost;Database=app;User Id=sa;Password=pass;\");",
    "var users = await conn.QueryAsync<(int Id, string Name)>(\"select id, name from users where id = @id\", new { id = 1 });",
    "Console.WriteLine(users.First().Name);"
  ].join("\n");
}
