"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
    return [
        "var builder = WebApplication.CreateBuilder(args);",
        "var app = builder.Build();",
        "",
        "app.MapGet(\"/health\", () => Results.Ok(\"ok\"));",
        "app.MapGet(\"/users/{id:int}\", (int id) => Results.Ok($\"user:{id}\"));",
        "",
        "app.Run();"
    ].join("\n");
}
