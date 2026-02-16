"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToClojureRules = void 0;
exports.juliaToClojure = juliaToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "clojure");
function juliaToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "clojure", code);
}
exports.juliaToClojureRules = rules;
