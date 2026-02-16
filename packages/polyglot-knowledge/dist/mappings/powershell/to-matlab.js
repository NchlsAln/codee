"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToMatlabRules = void 0;
exports.powershellToMatlab = powershellToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "matlab");
function powershellToMatlab(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "matlab", code);
}
exports.powershellToMatlabRules = rules;
