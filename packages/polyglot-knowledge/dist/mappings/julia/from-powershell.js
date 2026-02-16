"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToJuliaRules = void 0;
exports.powershellToJulia = powershellToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "julia");
function powershellToJulia(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "julia", code);
}
exports.powershellToJuliaRules = rules;
