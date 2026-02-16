"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToZigRules = void 0;
exports.matlabToZig = matlabToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "zig");
function matlabToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "zig", code);
}
exports.matlabToZigRules = rules;
