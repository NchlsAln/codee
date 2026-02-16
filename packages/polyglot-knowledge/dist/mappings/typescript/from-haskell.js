"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToTypeScriptRules = void 0;
exports.haskellToTypeScript = haskellToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "typescript");
function haskellToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "typescript", code);
}
exports.haskellToTypeScriptRules = rules;
