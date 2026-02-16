"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToPythonRules = void 0;
exports.ocamlToPython = ocamlToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "python");
function ocamlToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "python", code);
}
exports.ocamlToPythonRules = rules;
