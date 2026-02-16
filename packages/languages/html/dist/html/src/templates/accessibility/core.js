"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessibilityTemplate = accessibilityTemplate;
function accessibilityTemplate() {
    return [
        "<nav aria-label=\"Main\">",
        "  <a href=\"/\">Home</a>",
        "</nav>",
        "<img src=\"hero.jpg\" alt=\"Hero image\">"
    ].join("\n");
}
