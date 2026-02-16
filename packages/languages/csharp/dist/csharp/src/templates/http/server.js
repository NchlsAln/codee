"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServerTemplate = httpServerTemplate;
function httpServerTemplate() {
    return [
        "var builder = WebApplication.CreateBuilder(args);",
        "var app = builder.Build();",
        "app.MapGet(\"/\", () => \"ok\");",
        "app.Run();"
    ].join("\n");
}
