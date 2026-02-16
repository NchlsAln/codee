"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToClojureRules = void 0;
exports.haskellToClojure = haskellToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "clojure");
function haskellToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "clojure", code);
}
exports.haskellToClojureRules = rules;
