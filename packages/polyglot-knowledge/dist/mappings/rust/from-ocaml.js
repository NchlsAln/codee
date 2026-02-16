"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToRustRules = void 0;
exports.ocamlToRust = ocamlToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "rust");
function ocamlToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "rust", code);
}
exports.ocamlToRustRules = rules;
