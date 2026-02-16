"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToScalaRules = void 0;
exports.clojureToScala = clojureToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("clojure", "scala");
function clojureToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("clojure", "scala", code);
}
exports.clojureToScalaRules = rules;
