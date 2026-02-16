"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToTypeScriptRules = void 0;
exports.powershellToTypeScript = powershellToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "typescript");
function powershellToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "typescript", code);
}
exports.powershellToTypeScriptRules = rules;
