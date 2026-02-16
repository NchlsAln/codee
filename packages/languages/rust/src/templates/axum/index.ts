export function axumTemplate(): string {
  return [
    "use axum::{routing::get, Json, Router};",
    "use serde::Serialize;",
    "",
    "#[derive(Serialize)]",
    "struct Health {",
    "    ok: bool,",
    "}",
    "",
    "async fn health() -> Json<Health> {",
    "    Json(Health { ok: true })",
    "}",
    "",
    "#[tokio::main]",
    "async fn main() {",
    "    let app = Router::new().route(\"/health\", get(health));",
    "    axum::Server::bind(&\"0.0.0.0:3000\".parse().unwrap())",
    "        .serve(app.into_make_service())",
    "        .await",
    "        .unwrap();",
    "}"
  ].join("\n");
}
