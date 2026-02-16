"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToCsharpRules = void 0;
exports.clojureToCsharp = clojureToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("clojure", "csharp");
function clojureToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("clojure", "csharp", code);
}
exports.clojureToCsharpRules = rules;
