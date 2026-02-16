"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToClojureRules = void 0;
exports.matlabToClojure = matlabToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "clojure");
function matlabToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "clojure", code);
}
exports.matlabToClojureRules = rules;
