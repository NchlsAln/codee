"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToPhpRules = void 0;
exports.sqlToPhp = sqlToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "php");
function sqlToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "php", code);
}
exports.sqlToPhpRules = rules;
