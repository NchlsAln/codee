"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsTemplate = statisticsTemplate;
function statisticsTemplate() {
    return [
        "using Statistics, HypothesisTests",
        "mean(x)",
        "t = OneSampleTTest(x, 0.0)",
        "pvalue(t)"
    ].join("\n");
}
