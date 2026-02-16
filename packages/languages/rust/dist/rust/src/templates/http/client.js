"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientTemplate = httpClientTemplate;
function httpClientTemplate() {
    return [
        "use reqwest::Client;",
        "",
        "let client = Client::new();",
        "let response = client.get(\"https://example.com/health\").send().await?;",
        "let body = response.text().await?;",
        "",
        "println!(\"{}\", body);"
    ].join("\n");
}
