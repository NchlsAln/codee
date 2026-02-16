"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToErlangRules = void 0;
exports.haskellToErlang = haskellToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "erlang");
function haskellToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "erlang", code);
}
exports.haskellToErlangRules = rules;
