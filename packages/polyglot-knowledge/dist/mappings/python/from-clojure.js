"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToPythonRules = void 0;
exports.clojureToPython = clojureToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("clojure", "python");
function clojureToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("clojure", "python", code);
}
exports.clojureToPythonRules = rules;
