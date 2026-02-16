"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animationTemplate = animationTemplate;
function animationTemplate() {
    return [
        "@mixin fade-in($dur: 300ms) { animation: fade $dur ease-in; }",
        "@keyframes fade { from { opacity: 0; } to { opacity: 1; } }"
    ].join("\n");
}
