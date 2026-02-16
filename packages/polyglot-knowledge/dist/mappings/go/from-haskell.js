"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToGoRules = void 0;
exports.haskellToGo = haskellToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "go");
function haskellToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "go", code);
}
exports.haskellToGoRules = rules;
