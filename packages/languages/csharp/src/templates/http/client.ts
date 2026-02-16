export function httpClientTemplate(): string {
  return [
    "using System.Net.Http;",
    "",
    "using var client = new HttpClient();",
    "var response = await client.GetStringAsync(\"https://example.com/health\");",
    "Console.WriteLine(response);"
  ].join("\n");
}
