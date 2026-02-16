"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToClojureRules = void 0;
exports.sedToClojure = sedToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "clojure");
function sedToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "clojure", code);
}
exports.sedToClojureRules = rules;
