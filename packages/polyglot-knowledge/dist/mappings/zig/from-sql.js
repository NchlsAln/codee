"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToZigRules = void 0;
exports.sqlToZig = sqlToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "zig");
function sqlToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "zig", code);
}
exports.sqlToZigRules = rules;
