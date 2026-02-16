"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToHaskellRules = void 0;
exports.powershellToHaskell = powershellToHaskell;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "haskell");
function powershellToHaskell(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "haskell", code);
}
exports.powershellToHaskellRules = rules;
