"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToKotlinRules = void 0;
exports.powershellToKotlin = powershellToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "kotlin");
function powershellToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "kotlin", code);
}
exports.powershellToKotlinRules = rules;
