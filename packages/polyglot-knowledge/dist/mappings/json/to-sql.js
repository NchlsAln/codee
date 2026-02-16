"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToSqlRules = void 0;
exports.jsonToSql = jsonToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "sql");
function jsonToSql(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "sql", code);
}
exports.jsonToSqlRules = rules;
