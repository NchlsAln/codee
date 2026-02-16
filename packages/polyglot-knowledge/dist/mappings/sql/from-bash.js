"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToSqlRules = void 0;
exports.bashToSql = bashToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "sql");
function bashToSql(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "sql", code);
}
exports.bashToSqlRules = rules;
