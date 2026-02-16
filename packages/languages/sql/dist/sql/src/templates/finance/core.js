"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.financeTemplate = financeTemplate;
function financeTemplate() {
    return [
        "SELECT trade_date,",
        "       (price - LAG(price) OVER (ORDER BY trade_date)) / LAG(price) OVER (ORDER BY trade_date) AS return",
        "FROM prices;"
    ].join("\n");
}
