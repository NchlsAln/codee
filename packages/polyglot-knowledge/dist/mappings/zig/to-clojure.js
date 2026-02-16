"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToClojureRules = void 0;
exports.zigToClojure = zigToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "clojure");
function zigToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "clojure", code);
}
exports.zigToClojureRules = rules;
