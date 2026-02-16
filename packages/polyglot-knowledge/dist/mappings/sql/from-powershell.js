"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToSqlRules = void 0;
exports.powershellToSql = powershellToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "sql");
function powershellToSql(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "sql", code);
}
exports.powershellToSqlRules = rules;
