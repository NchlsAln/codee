"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToClojureRules = void 0;
exports.terraformToClojure = terraformToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "clojure");
function terraformToClojure(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "clojure", code);
}
exports.terraformToClojureRules = rules;
