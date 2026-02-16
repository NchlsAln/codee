"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessibilityTemplate = accessibilityTemplate;
function accessibilityTemplate() {
    return [
        ":focus-visible { outline: 2px solid #0f62fe; outline-offset: 2px; }",
        "@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }"
    ].join("\n");
}
