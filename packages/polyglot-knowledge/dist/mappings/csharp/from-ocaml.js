"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToCsharpRules = void 0;
exports.ocamlToCsharp = ocamlToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "csharp");
function ocamlToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "csharp", code);
}
exports.ocamlToCsharpRules = rules;
