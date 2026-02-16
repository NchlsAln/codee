"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGraphqlTemplate = httpGraphqlTemplate;
function httpGraphqlTemplate() {
    return [
        "use async_graphql::{Object, Schema};",
        "use async_graphql_axum::GraphQL;",
        "use axum::Router;",
        "",
        "struct QueryRoot;",
        "#[Object]",
        "impl QueryRoot {",
        "    async fn health(&self) -> bool { true }",
        "}",
        "",
        "let schema = Schema::build(QueryRoot, async_graphql::EmptyMutation, async_graphql::EmptySubscription).finish();",
        "let app = Router::new().route(\"/graphql\", GraphQL::new(schema));"
    ].join("\n");
}
