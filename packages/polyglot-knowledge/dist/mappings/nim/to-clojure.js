"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToClojureRules = void 0;
exports.nimToClojure = nimToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "clojure");
function nimToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "clojure", code);
}
exports.nimToClojureRules = rules;
