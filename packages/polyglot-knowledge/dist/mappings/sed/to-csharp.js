"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToCsharpRules = void 0;
exports.sedToCsharp = sedToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "csharp");
function sedToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "csharp", code);
}
exports.sedToCsharpRules = rules;
