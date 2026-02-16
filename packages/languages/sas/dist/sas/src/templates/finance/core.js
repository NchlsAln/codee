"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.financeTemplate = financeTemplate;
function financeTemplate() {
    return [
        "proc sql;",
        "  select date, (price - lag(price)) / lag(price) as return",
        "  from work.prices;",
        "quit;"
    ].join("\n");
}
