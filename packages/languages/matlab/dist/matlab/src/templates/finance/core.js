"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.financeTemplate = financeTemplate;
function financeTemplate() {
    return [
        "rets = price2ret(prices);",
        "vol = std(rets);",
        "disp(vol)"
    ].join("\n");
}
