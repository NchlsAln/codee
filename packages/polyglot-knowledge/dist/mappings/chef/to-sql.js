"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToSqlRules = void 0;
exports.chefToSql = chefToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "sql");
function chefToSql(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "sql", code);
}
exports.chefToSqlRules = rules;
