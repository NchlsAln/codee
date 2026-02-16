"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToErlangRules = void 0;
exports.sqlToErlang = sqlToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "erlang");
function sqlToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "erlang", code);
}
exports.sqlToErlangRules = rules;
