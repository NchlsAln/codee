"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToSqlRules = void 0;
exports.scssToSql = scssToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "sql");
function scssToSql(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "sql", code);
}
exports.scssToSqlRules = rules;
