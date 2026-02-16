"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToKotlinRules = void 0;
exports.clojureToKotlin = clojureToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("clojure", "kotlin");
function clojureToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("clojure", "kotlin", code);
}
exports.clojureToKotlinRules = rules;
