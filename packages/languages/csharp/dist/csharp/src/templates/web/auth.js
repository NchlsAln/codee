"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authTemplate = authTemplate;
function authTemplate() {
    return [
        "using System.Security.Claims;",
        "",
        "var builder = WebApplication.CreateBuilder(args);",
        "builder.Services.AddAuthorization();",
        "var app = builder.Build();",
        "",
        "app.MapGet(\"/me\", (ClaimsPrincipal user) => user.Identity?.Name ?? \"anonymous\")",
        "  .RequireAuthorization();",
        "",
        "app.Run();"
    ].join("\n");
}
