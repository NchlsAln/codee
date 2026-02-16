"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToSqlRules = void 0;
exports.sedToSql = sedToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "sql");
function sedToSql(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "sql", code);
}
exports.sedToSqlRules = rules;
