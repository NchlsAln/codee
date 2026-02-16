"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRestTemplate = httpRestTemplate;
function httpRestTemplate() {
    return [
        "var builder = WebApplication.CreateBuilder(args);",
        "var app = builder.Build();",
        "",
        "app.MapGet(\"/api/users\", () => Results.Ok(new[] { new { Id = 1, Name = \"Ada\" } }));",
        "app.MapPost(\"/api/users\", () => Results.Created(\"/api/users/1\", null));",
        "",
        "app.Run();"
    ].join("\n");
}
