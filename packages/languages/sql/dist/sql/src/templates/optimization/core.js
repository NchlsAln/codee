"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizationTemplate = optimizationTemplate;
function optimizationTemplate() {
    return [
        "EXPLAIN ANALYZE",
        "SELECT * FROM orders",
        "WHERE created_at >= CURRENT_DATE - INTERVAL '30 days';"
    ].join("\n");
}
