"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToClojureRules = void 0;
exports.sasToClojure = sasToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "clojure");
function sasToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "clojure", code);
}
exports.sasToClojureRules = rules;
