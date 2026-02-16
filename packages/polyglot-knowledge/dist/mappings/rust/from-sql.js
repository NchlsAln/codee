"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToRustRules = void 0;
exports.sqlToRust = sqlToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "rust");
function sqlToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "rust", code);
}
exports.sqlToRustRules = rules;
