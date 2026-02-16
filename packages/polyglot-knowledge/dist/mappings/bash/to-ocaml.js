"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToOcamlRules = void 0;
exports.bashToOcaml = bashToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "ocaml");
function bashToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "ocaml", code);
}
exports.bashToOcamlRules = rules;
