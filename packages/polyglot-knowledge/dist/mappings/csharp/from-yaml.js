"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToCsharpRules = void 0;
exports.yamlToCsharp = yamlToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "csharp");
function yamlToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "csharp", code);
}
exports.yamlToCsharpRules = rules;
