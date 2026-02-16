"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToClojureRules = void 0;
exports.htmlToClojure = htmlToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "clojure");
function htmlToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "clojure", code);
}
exports.htmlToClojureRules = rules;
