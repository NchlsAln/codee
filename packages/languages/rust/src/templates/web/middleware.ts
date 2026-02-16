export function middlewareTemplate(): string {
  return [
    "use axum::{routing::get, Router};",
    "use tower::ServiceBuilder;",
    "use tower_http::trace::TraceLayer;",
    "",
    "async fn health() -> &'static str {",
    "    \"ok\"",
    "}",
    "",
    "let app = Router::new()",
    "    .route(\"/health\", get(health))",
    "    .layer(ServiceBuilder::new().layer(TraceLayer::new_for_http()));"
  ].join("\n");
}
