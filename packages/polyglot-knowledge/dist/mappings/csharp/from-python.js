"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToCsharpRules = void 0;
exports.pythonToCsharp = pythonToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("python", "csharp");
function pythonToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("python", "csharp", code);
}
exports.pythonToCsharpRules = rules;
