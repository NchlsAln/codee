"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToSwiftRules = void 0;
exports.haskellToSwift = haskellToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "swift");
function haskellToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "swift", code);
}
exports.haskellToSwiftRules = rules;
