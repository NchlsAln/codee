"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToZigRules = void 0;
exports.powershellToZig = powershellToZig;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "zig");
function powershellToZig(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "zig", code);
}
exports.powershellToZigRules = rules;
