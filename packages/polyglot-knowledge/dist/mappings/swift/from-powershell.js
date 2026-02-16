"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToSwiftRules = void 0;
exports.powershellToSwift = powershellToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "swift");
function powershellToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "swift", code);
}
exports.powershellToSwiftRules = rules;
