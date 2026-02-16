"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToClojureRules = void 0;
exports.sqlToClojure = sqlToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "clojure");
function sqlToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "clojure", code);
}
exports.sqlToClojureRules = rules;
