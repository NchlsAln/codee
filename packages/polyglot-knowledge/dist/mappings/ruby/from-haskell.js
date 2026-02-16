"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToRubyRules = void 0;
exports.haskellToRuby = haskellToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "ruby");
function haskellToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "ruby", code);
}
exports.haskellToRubyRules = rules;
