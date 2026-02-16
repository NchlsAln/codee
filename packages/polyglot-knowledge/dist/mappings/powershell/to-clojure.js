"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToClojureRules = void 0;
exports.powershellToClojure = powershellToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "clojure");
function powershellToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "clojure", code);
}
exports.powershellToClojureRules = rules;
