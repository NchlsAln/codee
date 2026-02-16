"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blazorComponentTemplate = blazorComponentTemplate;
function blazorComponentTemplate() {
    return [
        "@page \"/counter\"",
        "",
        "<h3>Counter</h3>",
        "<p>Current count: @currentCount</p>",
        "<button class=\"btn btn-primary\" @onclick=\"Increment\">Click me</button>",
        "",
        "@code {",
        "  private int currentCount = 0;",
        "  private void Increment() => currentCount++;",
        "}"
    ].join("\n");
}
