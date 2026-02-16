"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToOcamlRules = void 0;
exports.juliaToOcaml = juliaToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "ocaml");
function juliaToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "ocaml", code);
}
exports.juliaToOcamlRules = rules;
