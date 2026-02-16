"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visualizationTemplate = visualizationTemplate;
function visualizationTemplate() {
    return [
        "SELECT date_trunc('month', created_at) AS month,",
        "       COUNT(*) AS signups",
        "FROM users",
        "GROUP BY 1",
        "ORDER BY 1;"
    ].join("\n");
}
