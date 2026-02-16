"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToClojureRules = void 0;
exports.ansibleToClojure = ansibleToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "clojure");
function ansibleToClojure(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "clojure", code);
}
exports.ansibleToClojureRules = rules;
