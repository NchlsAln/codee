"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToClojureRules = void 0;
exports.awkToClojure = awkToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "clojure");
function awkToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "clojure", code);
}
exports.awkToClojureRules = rules;
