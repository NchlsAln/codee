"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToDartRules = void 0;
exports.ocamlToDart = ocamlToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "dart");
function ocamlToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "dart", code);
}
exports.ocamlToDartRules = rules;
