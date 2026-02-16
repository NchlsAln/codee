"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToJavaRules = void 0;
exports.clojureToJava = clojureToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("clojure", "java");
function clojureToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("clojure", "java", code);
}
exports.clojureToJavaRules = rules;
