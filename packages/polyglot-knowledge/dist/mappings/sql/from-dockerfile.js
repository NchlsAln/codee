"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToSqlRules = void 0;
exports.dockerfileToSql = dockerfileToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "sql");
function dockerfileToSql(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "sql", code);
}
exports.dockerfileToSqlRules = rules;
