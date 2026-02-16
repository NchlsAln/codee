"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToSwiftRules = void 0;
exports.ocamlToSwift = ocamlToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "swift");
function ocamlToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "swift", code);
}
exports.ocamlToSwiftRules = rules;
