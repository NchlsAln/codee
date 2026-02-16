"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToSqlRules = void 0;
exports.yamlToSql = yamlToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "sql");
function yamlToSql(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "sql", code);
}
exports.yamlToSqlRules = rules;
