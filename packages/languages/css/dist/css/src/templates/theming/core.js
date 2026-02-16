"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themingTemplate = themingTemplate;
function themingTemplate() {
    return [
        ":root { --bg: #fff; --fg: #111; }",
        "[data-theme='dark'] { --bg: #111; --fg: #f5f5f5; }",
        "body { background: var(--bg); color: var(--fg); }"
    ].join("\n");
}
