"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
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
