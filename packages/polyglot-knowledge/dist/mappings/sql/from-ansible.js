"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToSqlRules = void 0;
exports.ansibleToSql = ansibleToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "sql");
function ansibleToSql(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "sql", code);
}
exports.ansibleToSqlRules = rules;
