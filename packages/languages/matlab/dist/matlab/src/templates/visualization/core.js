"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visualizationTemplate = visualizationTemplate;
function visualizationTemplate() {
    return [
        "figure;",
        "scatter(x, y);",
        "xlabel('x'); ylabel('y');"
    ].join("\n");
}
