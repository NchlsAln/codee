"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.financeTemplate = financeTemplate;
function financeTemplate() {
    return [
        "using MarketData, Statistics",
        "prices = marketdata()[!, :AdjClose]",
        "rets = diff(log.(prices))",
        "println(mean(rets))"
    ].join("\n");
}
