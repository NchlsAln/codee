"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToSqlRules = void 0;
exports.xmlToSql = xmlToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "sql");
function xmlToSql(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "sql", code);
}
exports.xmlToSqlRules = rules;
