"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToElixirRules = void 0;
exports.haskellToElixir = haskellToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "elixir");
function haskellToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "elixir", code);
}
exports.haskellToElixirRules = rules;
