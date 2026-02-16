"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToPhpRules = void 0;
exports.powershellToPhp = powershellToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "php");
function powershellToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "php", code);
}
exports.powershellToPhpRules = rules;
