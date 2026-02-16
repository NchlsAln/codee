"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToClojureRules = void 0;
exports.rToClojure = rToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "clojure");
function rToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "clojure", code);
}
exports.rToClojureRules = rules;
