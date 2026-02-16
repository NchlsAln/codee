"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToClojureRules = void 0;
exports.crystalToClojure = crystalToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "clojure");
function crystalToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "clojure", code);
}
exports.crystalToClojureRules = rules;
