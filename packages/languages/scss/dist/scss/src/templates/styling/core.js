"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stylingTemplate = stylingTemplate;
function stylingTemplate() {
    return [
        "$shadow: 0 10px 24px rgba(0,0,0,0.08);",
        ".card { padding: 1.5rem; border-radius: 12px; box-shadow: $shadow; }"
    ].join("\n");
}
