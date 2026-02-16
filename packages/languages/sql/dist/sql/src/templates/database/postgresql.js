"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresTemplate = postgresTemplate;
function postgresTemplate() {
    return [
        "CREATE TABLE IF NOT EXISTS customers (",
        "  customer_id SERIAL PRIMARY KEY,",
        "  email TEXT NOT NULL UNIQUE,",
        "  created_at TIMESTAMP NOT NULL DEFAULT NOW()",
        ");",
        "",
        "CREATE INDEX IF NOT EXISTS idx_customers_email ON customers (email);"
    ].join("\n");
}
