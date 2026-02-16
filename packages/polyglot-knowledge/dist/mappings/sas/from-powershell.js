"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToSasRules = void 0;
exports.powershellToSas = powershellToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "sas");
function powershellToSas(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "sas", code);
}
exports.powershellToSasRules = rules;
