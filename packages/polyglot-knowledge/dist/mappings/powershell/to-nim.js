"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToNimRules = void 0;
exports.powershellToNim = powershellToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "nim");
function powershellToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "nim", code);
}
exports.powershellToNimRules = rules;
