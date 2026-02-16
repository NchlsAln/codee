"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToCppRules = void 0;
exports.ocamlToCpp = ocamlToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "cpp");
function ocamlToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "cpp", code);
}
exports.ocamlToCppRules = rules;
