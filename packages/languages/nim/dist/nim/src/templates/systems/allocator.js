"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allocatorTemplate = allocatorTemplate;
function allocatorTemplate() {
    return [
        "import system",
        "var p = allocShared0(64)",
        "defer: deallocShared(p)"
    ].join("\n");
}
