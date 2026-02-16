"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToGoRules = void 0;
exports.powershellToGo = powershellToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "go");
function powershellToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "go", code);
}
exports.powershellToGoRules = rules;
