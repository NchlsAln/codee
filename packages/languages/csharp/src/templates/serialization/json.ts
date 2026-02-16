export function jsonTemplate(): string {
  return [
    "using System.Text.Json;",
    "",
    "var user = new { Id = 1, Name = \"Ada\" };",
    "var json = JsonSerializer.Serialize(user);",
    "Console.WriteLine(json);"
  ].join("\n");
}
