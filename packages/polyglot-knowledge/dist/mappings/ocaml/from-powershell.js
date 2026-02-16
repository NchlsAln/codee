"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToOcamlRules = void 0;
exports.powershellToOcaml = powershellToOcaml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "ocaml");
function powershellToOcaml(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "ocaml", code);
}
exports.powershellToOcamlRules = rules;
