"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToTypeScriptRules = void 0;
exports.clojureToTypeScript = clojureToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("clojure", "typescript");
function clojureToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("clojure", "typescript", code);
}
exports.clojureToTypeScriptRules = rules;
