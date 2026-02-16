"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToElixirRules = void 0;
exports.ocamlToElixir = ocamlToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "elixir");
function ocamlToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "elixir", code);
}
exports.ocamlToElixirRules = rules;
