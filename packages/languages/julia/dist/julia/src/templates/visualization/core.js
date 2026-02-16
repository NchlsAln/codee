"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visualizationTemplate = visualizationTemplate;
function visualizationTemplate() {
    return [
        "using Plots",
        "plot(x, y, seriestype=:scatter)",
        "plot!(x, yhat)"
    ].join("\n");
}
