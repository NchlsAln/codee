"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToCsharpRules = void 0;
exports.bashToCsharp = bashToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "csharp");
function bashToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "csharp", code);
}
exports.bashToCsharpRules = rules;
