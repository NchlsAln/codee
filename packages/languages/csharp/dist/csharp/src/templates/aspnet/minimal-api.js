"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aspNetMinimalApiTemplate = aspNetMinimalApiTemplate;
function aspNetMinimalApiTemplate() {
    return [
        "using Microsoft.AspNetCore.Builder;",
        "using Microsoft.Extensions.Hosting;",
        "",
        "var builder = WebApplication.CreateBuilder(args);",
        "var app = builder.Build();",
        "",
        "app.MapGet(\"/hello\", () => \"hello\");",
        "",
        "app.Run();"
    ].join("\n");
}
