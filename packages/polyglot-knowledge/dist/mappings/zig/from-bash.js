"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToZigRules = void 0;
exports.bashToZig = bashToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "zig");
function bashToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "zig", code);
}
exports.bashToZigRules = rules;
