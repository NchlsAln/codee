"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themingTemplate = themingTemplate;
function themingTemplate() {
    return [
        "$theme-light: (bg: #fff, fg: #111);",
        "$theme-dark: (bg: #111, fg: #f5f5f5);"
    ].join("\n");
}
