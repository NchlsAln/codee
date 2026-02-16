"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGraphqlTemplate = httpGraphqlTemplate;
function httpGraphqlTemplate() {
    return "package main\n\nimport (\n  \"net/http\"\n\n  \"github.com/99designs/gqlgen/graphql/handler\"\n  \"github.com/99designs/gqlgen/graphql/playground\"\n)\n\nfunc main() {\n  http.Handle(\"/graphql\", handler.NewDefaultServer(NewExecutableSchema(Config{Resolvers: &Resolver{}})))\n  http.Handle(\"/\", playground.Handler(\"GraphQL\", \"/graphql\"))\n  _ = http.ListenAndServe(\":8080\", nil)\n}\n";
}
