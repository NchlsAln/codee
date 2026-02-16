export function asyncTemplate(): string {
  return [
    "using System.Net.Http;",
    "",
    "static async Task<string> FetchAsync(string url)",
    "{",
    "  using var client = new HttpClient();",
    "  return await client.GetStringAsync(url);",
    "}",
    "",
    "var content = await FetchAsync(\"https://example.com\");",
    "Console.WriteLine(content.Length);"
  ].join("\n");
}
