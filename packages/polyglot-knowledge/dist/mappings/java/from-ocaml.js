"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToJavaRules = void 0;
exports.ocamlToJava = ocamlToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "java");
function ocamlToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "java", code);
}
exports.ocamlToJavaRules = rules;
