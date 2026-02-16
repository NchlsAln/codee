"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizationTemplate = optimizationTemplate;
function optimizationTemplate() {
    return [
        "f = [3 2];",
        "A = [2 1; 1 1];",
        "b = [100; 80];",
        "x = linprog(f, A, b);",
        "disp(x)"
    ].join("\n");
}
