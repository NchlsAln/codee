"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizationTemplate = optimizationTemplate;
function optimizationTemplate() {
    return [
        "proc optmodel;",
        "  var x >= 0;",
        "  minimize cost = x;",
        "  solve;",
        "quit;"
    ].join("\n");
}
