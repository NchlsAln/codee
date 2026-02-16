"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToPhpRules = void 0;
exports.ocamlToPhp = ocamlToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "php");
function ocamlToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "php", code);
}
exports.ocamlToPhpRules = rules;
