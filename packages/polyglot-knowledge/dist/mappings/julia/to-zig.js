"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToZigRules = void 0;
exports.juliaToZig = juliaToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "zig");
function juliaToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "zig", code);
}
exports.juliaToZigRules = rules;
