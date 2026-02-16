export function httpClientTemplate(): string {
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
