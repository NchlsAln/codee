"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGraphqlTemplate = httpGraphqlTemplate;
function httpGraphqlTemplate() {
    return [
        "var builder = WebApplication.CreateBuilder(args);",
        "builder.Services",
        "  .AddGraphQLServer()",
        "  .AddQueryType(d => d.Name(\"Query\").Field(\"ping\").Resolve(\"pong\"));",
        "",
        "var app = builder.Build();",
        "app.MapGraphQL();",
        "app.Run();"
    ].join("\n");
}
