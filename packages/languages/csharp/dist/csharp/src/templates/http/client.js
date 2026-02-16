"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientTemplate = httpClientTemplate;
function httpClientTemplate() {
    return [
        "using System.Net.Http;",
        "",
        "using var client = new HttpClient();",
        "var response = await client.GetStringAsync(\"https://example.com/health\");",
        "Console.WriteLine(response);"
    ].join("\n");
}
