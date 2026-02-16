"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "ch = Channel{Int}(1)",
        "@async put!(ch, 42)",
        "println(take!(ch))"
    ].join("\n");
}
