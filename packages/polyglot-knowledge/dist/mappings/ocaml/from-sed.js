"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToOcamlRules = void 0;
exports.sedToOcaml = sedToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "ocaml");
function sedToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "ocaml", code);
}
exports.sedToOcamlRules = rules;
