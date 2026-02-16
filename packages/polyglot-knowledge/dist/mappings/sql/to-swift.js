"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToSwiftRules = void 0;
exports.sqlToSwift = sqlToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "swift");
function sqlToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "swift", code);
}
exports.sqlToSwiftRules = rules;
