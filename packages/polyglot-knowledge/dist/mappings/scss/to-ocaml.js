"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToOcamlRules = void 0;
exports.scssToOcaml = scssToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "ocaml");
function scssToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "ocaml", code);
}
exports.scssToOcamlRules = rules;
