"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
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
