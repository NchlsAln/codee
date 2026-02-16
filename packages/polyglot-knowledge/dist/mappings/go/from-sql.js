"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToGoRules = void 0;
exports.sqlToGo = sqlToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "go");
function sqlToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "go", code);
}
exports.sqlToGoRules = rules;
