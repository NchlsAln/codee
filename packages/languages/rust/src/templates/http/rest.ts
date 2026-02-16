export function httpRestTemplate(): string {
  return [
    "use axum::{routing::post, Json, Router};",
    "use serde::Deserialize;",
    "",
    "#[derive(Deserialize)]",
    "struct Item { name: String }",
    "",
    "async fn create(Json(item): Json<Item>) -> Json<Item> {",
    "    Json(item)",
    "}",
    "",
    "let app = Router::new().route(\"/items\", post(create));"
  ].join("\n");
}
