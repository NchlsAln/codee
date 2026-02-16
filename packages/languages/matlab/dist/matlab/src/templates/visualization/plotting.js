"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plotTemplate = plotTemplate;
function plotTemplate() {
    return [
        "x = 1:10;",
        "y = x.^2;",
        "plot(x, y);",
        "grid on;"
    ].join("\n");
}
