"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToNimRules = void 0;
exports.sqlToNim = sqlToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "nim");
function sqlToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "nim", code);
}
exports.sqlToNimRules = rules;
