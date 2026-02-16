"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToRustRules = void 0;
exports.clojureToRust = clojureToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("clojure", "rust");
function clojureToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("clojure", "rust", code);
}
exports.clojureToRustRules = rules;
