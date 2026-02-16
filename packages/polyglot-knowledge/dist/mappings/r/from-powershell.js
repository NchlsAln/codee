"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToRRules = void 0;
exports.powershellToR = powershellToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "r");
function powershellToR(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "r", code);
}
exports.powershellToRRules = rules;
