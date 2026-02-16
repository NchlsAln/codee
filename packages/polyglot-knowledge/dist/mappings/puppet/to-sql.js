"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToSqlRules = void 0;
exports.puppetToSql = puppetToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "sql");
function puppetToSql(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "sql", code);
}
exports.puppetToSqlRules = rules;
