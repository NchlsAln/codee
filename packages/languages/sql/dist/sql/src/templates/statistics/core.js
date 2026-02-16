"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsTemplate = statisticsTemplate;
function statisticsTemplate() {
    return [
        "SELECT AVG(amount) AS avg_amt,",
        "       STDDEV(amount) AS std_amt",
        "FROM payments;"
    ].join("\n");
}
