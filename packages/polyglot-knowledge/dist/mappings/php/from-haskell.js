"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToPhpRules = void 0;
exports.haskellToPhp = haskellToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "php");
function haskellToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "php", code);
}
exports.haskellToPhpRules = rules;
