"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToOcamlRules = void 0;
exports.awkToOcaml = awkToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "ocaml");
function awkToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "ocaml", code);
}
exports.awkToOcamlRules = rules;
