"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellToCsharpRules = void 0;
exports.powershellToCsharp = powershellToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("powershell", "csharp");
function powershellToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("powershell", "csharp", code);
}
exports.powershellToCsharpRules = rules;
