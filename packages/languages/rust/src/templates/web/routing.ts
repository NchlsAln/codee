export function routingTemplate(): string {
  return [
    "use axum::{routing::get, Router};",
    "",
    "async fn health() -> &'static str {",
    "    \"ok\"",
    "}",
    "",
    "let app = Router::new().route(\"/health\", get(health));"
  ].join("\n");
}
