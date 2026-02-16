"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToClojureRules = void 0;
exports.xmlToClojure = xmlToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "clojure");
function xmlToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "clojure", code);
}
exports.xmlToClojureRules = rules;
