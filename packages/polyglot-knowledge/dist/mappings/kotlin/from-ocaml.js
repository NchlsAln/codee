"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToKotlinRules = void 0;
exports.ocamlToKotlin = ocamlToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "kotlin");
function ocamlToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "kotlin", code);
}
exports.ocamlToKotlinRules = rules;
