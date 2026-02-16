"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToClojureRules = void 0;
exports.cssToClojure = cssToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "clojure");
function cssToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "clojure", code);
}
exports.cssToClojureRules = rules;
