"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToClojureRules = void 0;
exports.ocamlToClojure = ocamlToClojure;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "clojure");
function ocamlToClojure(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "clojure", code);
}
exports.ocamlToClojureRules = rules;
