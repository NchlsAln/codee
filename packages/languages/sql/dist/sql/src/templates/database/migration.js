"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationTemplate = migrationTemplate;
function migrationTemplate() {
    return [
        "BEGIN;",
        "ALTER TABLE orders ADD COLUMN coupon_code TEXT;",
        "UPDATE orders SET coupon_code = NULL WHERE coupon_code = '';",
        "COMMIT;"
    ].join("\n");
}
