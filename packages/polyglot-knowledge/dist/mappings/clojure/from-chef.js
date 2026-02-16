"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToClojureRules = void 0;
exports.chefToClojure = chefToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "clojure");
function chefToClojure(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "clojure", code);
}
exports.chefToClojureRules = rules;
