"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToZigRules = void 0;
exports.awkToZig = awkToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "zig");
function awkToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "zig", code);
}
exports.awkToZigRules = rules;
