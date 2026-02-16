"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessibilityTemplate = accessibilityTemplate;
function accessibilityTemplate() {
    return [
        ":focus-visible { outline: 2px solid $color-primary; outline-offset: 2px; }"
    ].join("\n");
}
