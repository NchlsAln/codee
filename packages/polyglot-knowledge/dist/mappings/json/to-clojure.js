"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToClojureRules = void 0;
exports.jsonToClojure = jsonToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "clojure");
function jsonToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "clojure", code);
}
exports.jsonToClojureRules = rules;
