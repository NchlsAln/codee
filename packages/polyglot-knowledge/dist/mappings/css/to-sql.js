"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToSqlRules = void 0;
exports.cssToSql = cssToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "sql");
function cssToSql(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "sql", code);
}
exports.cssToSqlRules = rules;
