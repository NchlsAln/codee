"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plotsTemplate = plotsTemplate;
function plotsTemplate() {
    return [
        "using Plots",
        "x = 1:5",
        "y = [2, 3, 5, 7, 11]",
        "plot(x, y, label=\"trend\")"
    ].join("\n");
}
