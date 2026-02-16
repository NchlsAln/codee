"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return [
        "parfor i = 1:4",
        "  disp(i);",
        "end"
    ].join("\n");
}
