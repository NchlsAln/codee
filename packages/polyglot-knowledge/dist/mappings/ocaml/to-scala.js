"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToScalaRules = void 0;
exports.ocamlToScala = ocamlToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "scala");
function ocamlToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "scala", code);
}
exports.ocamlToScalaRules = rules;
