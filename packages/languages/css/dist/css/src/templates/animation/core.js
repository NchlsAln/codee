"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animationTemplate = animationTemplate;
function animationTemplate() {
    return [
        "@keyframes fade { from { opacity: 0; } to { opacity: 1; } }",
        ".fade-in { animation: fade 300ms ease-in; }"
    ].join("\n");
}
