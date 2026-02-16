"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToRubyRules = void 0;
exports.powershellToRuby = powershellToRuby;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "ruby");
function powershellToRuby(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "ruby", code);
}
exports.powershellToRubyRules = rules;
