"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToOcamlRules = void 0;
exports.matlabToOcaml = matlabToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "ocaml");
function matlabToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "ocaml", code);
}
exports.matlabToOcamlRules = rules;
