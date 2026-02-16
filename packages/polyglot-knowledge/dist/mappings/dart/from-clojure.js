"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToDartRules = void 0;
exports.clojureToDart = clojureToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("clojure", "dart");
function clojureToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("clojure", "dart", code);
}
exports.clojureToDartRules = rules;
