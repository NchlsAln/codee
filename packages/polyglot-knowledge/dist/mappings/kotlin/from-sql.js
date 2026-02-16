"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToKotlinRules = void 0;
exports.sqlToKotlin = sqlToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "kotlin");
function sqlToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "kotlin", code);
}
exports.sqlToKotlinRules = rules;
