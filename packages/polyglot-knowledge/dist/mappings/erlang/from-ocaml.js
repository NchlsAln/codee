"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToErlangRules = void 0;
exports.ocamlToErlang = ocamlToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "erlang");
function ocamlToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "erlang", code);
}
exports.ocamlToErlangRules = rules;
