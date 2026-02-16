"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToElixirRules = void 0;
exports.powershellToElixir = powershellToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "elixir");
function powershellToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "elixir", code);
}
exports.powershellToElixirRules = rules;
