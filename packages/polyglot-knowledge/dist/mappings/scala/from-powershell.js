"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToScalaRules = void 0;
exports.powershellToScala = powershellToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "scala");
function powershellToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "scala", code);
}
exports.powershellToScalaRules = rules;
