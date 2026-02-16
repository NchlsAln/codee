"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToOcamlRules = void 0;
exports.yamlToOcaml = yamlToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "ocaml");
function yamlToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "ocaml", code);
}
exports.yamlToOcamlRules = rules;
