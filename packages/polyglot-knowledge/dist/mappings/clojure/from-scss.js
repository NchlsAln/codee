"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToClojureRules = void 0;
exports.scssToClojure = scssToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "clojure");
function scssToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "clojure", code);
}
exports.scssToClojureRules = rules;
