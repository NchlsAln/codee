"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlToTypeScriptRules = void 0;
exports.ocamlToTypeScript = ocamlToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ocaml", "typescript");
function ocamlToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ocaml", "typescript", code);
}
exports.ocamlToTypeScriptRules = rules;
