"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToScalaRules = void 0;
exports.haskellToScala = haskellToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "scala");
function haskellToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "scala", code);
}
exports.haskellToScalaRules = rules;
