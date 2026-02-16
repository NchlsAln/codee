"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.financeTemplate = financeTemplate;
function financeTemplate() {
    return [
        "library(quantmod)",
        "getSymbols('AAPL')",
        "returns <- dailyReturn(Cl(AAPL))",
        "plot(returns)"
    ].join("\n");
}
