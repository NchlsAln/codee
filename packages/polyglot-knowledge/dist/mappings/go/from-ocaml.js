"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToGoRules = void 0;
exports.ocamlToGo = ocamlToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "go");
function ocamlToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "go", code);
}
exports.ocamlToGoRules = rules;
