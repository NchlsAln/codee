"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToJavaRules = void 0;
exports.powershellToJava = powershellToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "java");
function powershellToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "java", code);
}
exports.powershellToJavaRules = rules;
