"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRestTemplate = httpRestTemplate;
function httpRestTemplate() {
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
