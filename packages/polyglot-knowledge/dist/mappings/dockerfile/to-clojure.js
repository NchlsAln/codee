"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToClojureRules = void 0;
exports.dockerfileToClojure = dockerfileToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "clojure");
function dockerfileToClojure(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "clojure", code);
}
exports.dockerfileToClojureRules = rules;
