"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsTemplate = analyticsTemplate;
function analyticsTemplate() {
    return [
        "SELECT",
        "  country,",
        "  COUNT(*) AS orders,",
        "  SUM(total_amount) AS revenue",
        "FROM orders",
        "WHERE order_date >= DATE '2024-01-01'",
        "GROUP BY country",
        "ORDER BY revenue DESC;"
    ].join("\n");
}
