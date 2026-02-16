"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToSqlRules = void 0;
exports.awkToSql = awkToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "sql");
function awkToSql(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "sql", code);
}
exports.awkToSqlRules = rules;
