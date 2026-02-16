"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "ch = Channel(Int32).new",
        "spawn do",
        "  ch.send(42)",
        "end",
        "puts ch.receive"
    ].join("\n");
}
