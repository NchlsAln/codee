"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToRustRules = void 0;
exports.haskellToRust = haskellToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "rust");
function haskellToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "rust", code);
}
exports.haskellToRustRules = rules;
