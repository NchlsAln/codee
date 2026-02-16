"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToSqlRules = void 0;
exports.terraformToSql = terraformToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "sql");
function terraformToSql(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "sql", code);
}
exports.terraformToSqlRules = rules;
