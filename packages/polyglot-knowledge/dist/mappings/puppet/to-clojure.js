"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToClojureRules = void 0;
exports.puppetToClojure = puppetToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "clojure");
function puppetToClojure(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "clojure", code);
}
exports.puppetToClojureRules = rules;
