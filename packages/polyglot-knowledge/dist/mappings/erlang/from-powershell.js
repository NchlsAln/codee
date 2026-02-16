"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToErlangRules = void 0;
exports.powershellToErlang = powershellToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "erlang");
function powershellToErlang(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "erlang", code);
}
exports.powershellToErlangRules = rules;
