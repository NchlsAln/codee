export function authTemplate(): string {
  return [
    "use axum::{extract::TypedHeader, http::StatusCode, response::IntoResponse};",
    "use headers::Authorization;",
    "",
    "async fn require_auth(auth: TypedHeader<Authorization<String>>) -> impl IntoResponse {",
    "    if auth.token() != \"secret\" {",
    "        return StatusCode::FORBIDDEN;",
    "    }",
    "    StatusCode::OK",
    "}"
  ].join("\n");
}
