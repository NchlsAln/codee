"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToClojureRules = void 0;
exports.bashToClojure = bashToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "clojure");
function bashToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "clojure", code);
}
exports.bashToClojureRules = rules;
