"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeSeriesTemplate = timeSeriesTemplate;
function timeSeriesTemplate() {
    return [
        "SELECT day,",
        "       SUM(value) OVER (ORDER BY day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS rolling_7",
        "FROM metrics;"
    ].join("\n");
}
