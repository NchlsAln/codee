"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToClojureRules = void 0;
exports.yamlToClojure = yamlToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "clojure");
function yamlToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "clojure", code);
}
exports.yamlToClojureRules = rules;
