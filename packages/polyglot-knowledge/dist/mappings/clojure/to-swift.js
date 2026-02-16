"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToSwiftRules = void 0;
exports.clojureToSwift = clojureToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("clojure", "swift");
function clojureToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("clojure", "swift", code);
}
exports.clojureToSwiftRules = rules;
