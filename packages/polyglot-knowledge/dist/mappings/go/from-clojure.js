"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToGoRules = void 0;
exports.clojureToGo = clojureToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("clojure", "go");
function clojureToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("clojure", "go", code);
}
exports.clojureToGoRules = rules;
