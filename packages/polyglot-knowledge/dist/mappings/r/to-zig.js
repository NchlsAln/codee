"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToZigRules = void 0;
exports.rToZig = rToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "zig");
function rToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "zig", code);
}
exports.rToZigRules = rules;
