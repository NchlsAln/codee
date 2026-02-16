"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToSqlRules = void 0;
exports.htmlToSql = htmlToSql;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "sql");
function htmlToSql(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "sql", code);
}
exports.htmlToSqlRules = rules;
