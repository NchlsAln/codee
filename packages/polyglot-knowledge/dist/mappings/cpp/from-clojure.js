"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToCppRules = void 0;
exports.clojureToCpp = clojureToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("clojure", "cpp");
function clojureToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("clojure", "cpp", code);
}
exports.clojureToCppRules = rules;
