"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToJavaRules = void 0;
exports.haskellToJava = haskellToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "java");
function haskellToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "java", code);
}
exports.haskellToJavaRules = rules;
