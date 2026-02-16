"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToRustRules = void 0;
exports.powershellToRust = powershellToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "rust");
function powershellToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "rust", code);
}
exports.powershellToRustRules = rules;
