"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToKotlinRules = void 0;
exports.haskellToKotlin = haskellToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "kotlin");
function haskellToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "kotlin", code);
}
exports.haskellToKotlinRules = rules;
